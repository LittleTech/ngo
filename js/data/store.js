/**
 * Trauma Childcare and Development Organisation (TCDO) - LocalStorage Reactive Store & State Manager
 * Ensures real-time synchronization between Admin CMS edits and Public Views.
 */

(function () {
  const STORAGE_KEY = 'theccoda_database_v5';

  class KatosiStore {
    constructor() {
      this.listeners = {};
      this.data = this._load();
    }

    _load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.settings && parsed.settings.orgName === 'THECCODA') {
            const seedSettings = (window.KATOSI_INITIAL_DATA && window.KATOSI_INITIAL_DATA.settings) || {};
            parsed.settings.vision = seedSettings.vision || parsed.settings.vision;
            parsed.settings.mission = seedSettings.mission || parsed.settings.mission;
            parsed.settings.coreValues = seedSettings.coreValues || parsed.settings.coreValues;
            return parsed;
          }
        }
      } catch (e) {
        console.warn('Failed to parse localStorage data:', e);
      }
      // Clone from fresh seed
      const initial = JSON.parse(JSON.stringify(window.KATOSI_INITIAL_DATA || {}));
      this._persist(initial);
      return initial;
    }

    _persist(data = this.data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
      }
    }

    subscribe(event, callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
      return () => {
        this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
      };
    }

    emit(event, payload) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(cb => cb(payload));
      }
      if (this.listeners['*']) {
        this.listeners['*'].forEach(cb => cb({ event, payload }));
      }
    }

    // --- Settings & Metadata ---
    getSettings() {
      return this.data.settings || {};
    }

    updateSettings(newSettings) {
      this.data.settings = { ...this.data.settings, ...newSettings };
      this._persist();
      this.emit('settings_updated', this.data.settings);
      return this.data.settings;
    }

    // --- Impact Stats ---
    getStats() {
      return this.data.stats || [];
    }

    updateStats(newStats) {
      this.data.stats = newStats;
      this._persist();
      this.emit('stats_updated', this.data.stats);
      return this.data.stats;
    }

    // --- Programmes ---
    getProgrammes() {
      return this.data.programmes || [];
    }

    getProgrammeBySlug(slug) {
      return this.getProgrammes().find(p => p.slug === slug || p.id === slug);
    }

    saveProgramme(programme) {
      const list = this.getProgrammes();
      const idx = list.findIndex(p => p.id === programme.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...programme };
      } else {
        if (!programme.id) programme.id = 'prog-' + Date.now();
        list.push(programme);
      }
      this.data.programmes = list;
      this._persist();
      this.emit('programmes_updated', list);
      return programme;
    }

    // --- Projects ---
    getProjects() {
      return this.data.projects || [];
    }

    getProjectBySlug(slug) {
      return this.getProjects().find(p => p.slug === slug || p.id === slug);
    }

    saveProject(project) {
      const list = this.getProjects();
      const idx = list.findIndex(p => p.id === project.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...project };
      } else {
        if (!project.id) project.id = 'proj-' + Date.now();
        if (!project.slug) project.slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        list.unshift(project);
      }
      this.data.projects = list;
      this._persist();
      this.emit('projects_updated', list);
      return project;
    }

    deleteProject(id) {
      this.data.projects = (this.data.projects || []).filter(p => p.id !== id);
      this._persist();
      this.emit('projects_updated', this.data.projects);
    }

    // --- Stories ---
    getStories() {
      return this.data.stories || [];
    }

    getStoryBySlug(slug) {
      return this.getStories().find(s => s.slug === slug || s.id === slug);
    }

    saveStory(story) {
      const list = this.getStories();
      const idx = list.findIndex(s => s.id === story.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...story };
      } else {
        if (!story.id) story.id = 'story-' + Date.now();
        if (!story.slug) story.slug = (story.person + '-' + Date.now()).toLowerCase().replace(/[^a-z0-9]+/g, '-');
        list.unshift(story);
      }
      this.data.stories = list;
      this._persist();
      this.emit('stories_updated', list);
      return story;
    }

    deleteStory(id) {
      this.data.stories = (this.data.stories || []).filter(s => s.id !== id);
      this._persist();
      this.emit('stories_updated', this.data.stories);
    }

    // --- News ---
    getNews() {
      return this.data.news || [];
    }

    getNewsBySlug(slug) {
      return this.getNews().find(n => n.slug === slug || n.id === slug);
    }

    saveNews(newsItem) {
      const list = this.getNews();
      const idx = list.findIndex(n => n.id === newsItem.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...newsItem };
      } else {
        if (!newsItem.id) newsItem.id = 'news-' + Date.now();
        if (!newsItem.slug) newsItem.slug = (newsItem.title || 'news').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        list.unshift(newsItem);
      }
      this.data.news = list;
      this._persist();
      this.emit('news_updated', list);
      return newsItem;
    }

    deleteNews(id) {
      this.data.news = (this.data.news || []).filter(n => n.id !== id);
      this._persist();
      this.emit('news_updated', this.data.news);
    }

    // --- Events ---
    getEvents() {
      return this.data.events || [];
    }

    getEventBySlug(slug) {
      return this.getEvents().find(e => e.slug === slug || e.id === slug);
    }

    saveEvent(eventItem) {
      const list = this.getEvents();
      const idx = list.findIndex(e => e.id === eventItem.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...eventItem };
      } else {
        if (!eventItem.id) eventItem.id = 'event-' + Date.now();
        if (!eventItem.slug) eventItem.slug = (eventItem.title || 'event').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        list.unshift(eventItem);
      }
      this.data.events = list;
      this._persist();
      this.emit('events_updated', list);
      return eventItem;
    }

    registerForEvent(eventId, participant) {
      const events = this.getEvents();
      const ev = events.find(e => e.id === eventId || e.slug === eventId);
      if (ev) {
        ev.registeredCount = (ev.registeredCount || 0) + 1;
        this._persist();
        this.emit('events_updated', events);
      }
      const regId = 'REG-' + Date.now().toString().slice(-6);
      return { regId, ...participant, eventId, registeredAt: new Date().toISOString() };
    }

    // --- Resources ---
    getResources() {
      return this.data.resources || [];
    }

    saveResource(res) {
      const list = this.getResources();
      const idx = list.findIndex(r => r.id === res.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...res };
      } else {
        if (!res.id) res.id = 'res-' + Date.now();
        list.unshift(res);
      }
      this.data.resources = list;
      this._persist();
      this.emit('resources_updated', list);
      return res;
    }

    deleteResource(id) {
      this.data.resources = (this.data.resources || []).filter(r => r.id !== id);
      this._persist();
      this.emit('resources_updated', this.data.resources);
    }

    // --- Leadership & Team ---
    getLeadership() {
      return this.data.leadership || [];
    }

    saveLeader(leader) {
      const list = this.getLeadership();
      const idx = list.findIndex(l => l.id === leader.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...leader };
      } else {
        if (!leader.id) leader.id = 'lead-' + Date.now();
        list.push(leader);
      }
      this.data.leadership = list;
      this._persist();
      this.emit('leadership_updated', list);
      return leader;
    }

    // --- Partners ---
    getPartners() {
      return this.data.partners || [];
    }

    // --- Careers ---
    getCareers() {
      return this.data.careers || [];
    }

    saveCareer(job) {
      const list = this.getCareers();
      const idx = list.findIndex(j => j.id === job.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...job };
      } else {
        if (!job.id) job.id = 'job-' + Date.now();
        list.unshift(job);
      }
      this.data.careers = list;
      this._persist();
      this.emit('careers_updated', list);
      return job;
    }

    // --- Donations ---
    getDonations() {
      return this.data.donations || [];
    }

    recordDonation(donation) {
      const list = this.getDonations();
      const newDonation = {
        id: 'DON-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000),
        date: new Date().toISOString().split('T')[0],
        status: 'Completed',
        ...donation
      };
      list.unshift(newDonation);
      this.data.donations = list;
      this._persist();
      this.emit('donations_updated', list);
      return newDonation;
    }

    // --- Volunteer Applications ---
    getVolunteerApplications() {
      return this.data.volunteerApplications || [];
    }

    recordVolunteerApplication(app) {
      const list = this.getVolunteerApplications();
      const newApp = {
        id: 'VOL-' + new Date().getFullYear() + '-' + Math.floor(100 + Math.random() * 900),
        date: new Date().toISOString().split('T')[0],
        status: 'Review',
        ...app
      };
      list.unshift(newApp);
      this.data.volunteerApplications = list;
      this._persist();
      this.emit('volunteers_updated', list);
      return newApp;
    }

    updateVolunteerStatus(id, status) {
      const list = this.getVolunteerApplications();
      const item = list.find(v => v.id === id);
      if (item) {
        item.status = status;
        this._persist();
        this.emit('volunteers_updated', list);
      }
    }

    // --- Safeguarding Reports ---
    getSafeguardingReports() {
      return this.data.safeguardingReports || [];
    }

    recordSafeguardingReport(report) {
      const list = this.getSafeguardingReports();
      const trackingId = 'SAFE-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
      const newReport = {
        id: trackingId,
        date: new Date().toISOString().split('T')[0],
        status: 'Received',
        ...report
      };
      list.unshift(newReport);
      this.data.safeguardingReports = list;
      this._persist();
      this.emit('safeguarding_updated', list);
      return newReport;
    }

    // --- Community Feedback & Complaints ---
    getFeedback() {
      return this.data.feedbackMessages || [];
    }

    recordFeedback(feedback) {
      const list = this.getFeedback();
      const trackingId = 'FB-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
      const newFB = {
        id: trackingId,
        date: new Date().toISOString().split('T')[0],
        status: 'Received',
        ...feedback
      };
      list.unshift(newFB);
      this.data.feedbackMessages = list;
      this._persist();
      this.emit('feedback_updated', list);
      return newFB;
    }

    // --- Global Reset ---
    resetToDefaults() {
      this.data = JSON.parse(JSON.stringify(window.KATOSI_INITIAL_DATA || {}));
      this._persist();
      this.emit('store_reset', this.data);
      return this.data;
    }
  }

  // Global instance
  window.katosiStore = new KatosiStore();
  window.tcdoStore = window.katosiStore;
})();
