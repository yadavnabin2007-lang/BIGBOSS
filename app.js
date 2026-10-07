/* ==========================================================================
   BIGG BOSS COMMAND CENTER — MAIN APPLICATION LOGIC & SOUND ENGINE
   ========================================================================== */

// --- INITIAL DEFAULT DEMO STATE ---
const DEFAULT_CONTESTANTS = [
  {
    id: "c1",
    name: "Sidharth Shukla",
    team: "Team Alpha",
    role: "The Aggressive Strategist",
    points: 850,
    status: "captain", // captain, immune, nominated, active, evicted
    isCaptain: true,
    isImmune: true,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 0,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    bio: "Season 13 Legend. High intensity player known for direct confrontations and solid strategy."
  },
  {
    id: "c2",
    name: "Rubina Dilaik",
    team: "Team Alpha",
    role: "The Voice of Logic",
    points: 780,
    status: "immune",
    isCaptain: false,
    isImmune: true,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 1,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    bio: "Unapologetic, articulated speaker. Strong leadership qualities and unshakeable ethics."
  },
  {
    id: "c3",
    name: "Gautam Gulati",
    team: "Team Omega",
    role: "The Solo Maverick",
    points: 720,
    status: "active",
    isCaptain: false,
    isImmune: false,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 2,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    bio: "Fan favorite entertainer. Thrives under pressure and loves standing against the entire house."
  },
  {
    id: "c4",
    name: "Tejasswi Prakash",
    team: "Team Omega",
    role: "The Cute Strategist",
    points: 690,
    status: "active",
    isCaptain: false,
    isImmune: false,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 0,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    bio: "Highly energetic and task-focused. Uses emotional intelligence and tactical gameplay."
  },
  {
    id: "c5",
    name: "Prince Narula",
    team: "Team Renegade",
    role: "The Task King",
    points: 650,
    status: "active",
    isCaptain: false,
    isImmune: false,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 1,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    bio: "Reality show specialist. Dominates physical tasks and builds unbreakable team alliances."
  },
  {
    id: "c6",
    name: "Shehnaaz Gill",
    team: "Team Alpha",
    role: "The House Entertainer",
    points: 620,
    status: "active",
    isCaptain: false,
    isImmune: false,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 0,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    bio: "Pure entertainment quotient. Pure heart, hilarious antics, and loyal team bond."
  },
  {
    id: "c7",
    name: "Asim Riaz",
    team: "Team Renegade",
    role: "The Fitness Rebel",
    points: 580,
    status: "nominated",
    isCaptain: false,
    isImmune: false,
    isNominated: true,
    isEvicted: false,
    nominationVotes: 4,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    bio: "High stamina and fiercely outspoken. Never backs down from arguments."
  },
  {
    id: "c8",
    name: "Archana Gautam",
    team: "Team Omega",
    role: "The Firebrand Provocateur",
    points: 490,
    status: "nominated",
    isCaptain: false,
    isImmune: false,
    isNominated: true,
    isEvicted: false,
    nominationVotes: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    bio: "Unpredictable energy. Master at disrupting rival plans and kitchen ration arguments."
  },
  {
    id: "c9",
    name: "Abhishek Malhan",
    team: "Team Renegade",
    role: "The Youth Influencer",
    points: 540,
    status: "active",
    isCaptain: false,
    isImmune: false,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 2,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    bio: "Strategic digital creator. Strong audience connectivity and clear logic."
  },
  {
    id: "c10",
    name: "Karan Kundrra",
    team: "Team Alpha",
    role: "The Mind Strategist",
    points: 610,
    status: "active",
    isCaptain: false,
    isImmune: false,
    isNominated: false,
    isEvicted: false,
    nominationVotes: 1,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    bio: "Calm calculator. Handles house drama with tactical mind games."
  }
];

const DEFAULT_TASKS = [
  {
    id: "t1",
    title: "Ration Vault Lockdown Challenge",
    category: "Luxury Budget",
    description: "Contestants must guard the ration vault keys for 4 hours without letting the opposing team touch the pedestal.",
    reward: 150,
    penalty: 75,
    durationMinutes: 15,
    status: "In Progress", // Pending, In Progress, Completed, Failed
    assignedTeam: "Team Alpha"
  },
  {
    id: "t2",
    title: "Captaincy Endurance Tower",
    category: "Captaincy",
    description: "Hold onto the captaincy trophy flag while standing on one foot. Last housemate standing becomes House Captain!",
    reward: 250,
    penalty: 100,
    durationMinutes: 20,
    status: "Pending",
    assignedTeam: "All Teams"
  },
  {
    id: "t3",
    title: "Confession Secret Agent Mission",
    category: "Secret Mission",
    description: "Secretly convince 3 housemates to give up their personal belongings without revealing the secret instruction.",
    reward: 200,
    penalty: 50,
    durationMinutes: 10,
    status: "Completed",
    assignedTeam: "Team Omega"
  }
];

const DEFAULT_ACTIVITY_LOG = [
  { timestamp: "09:30:00", text: "Bigg Boss initialized Command Center v4.5." },
  { timestamp: "09:32:15", text: "Sidharth Shukla was assigned as House Captain." },
  { timestamp: "09:35:00", text: "Rubina Dilaik granted Immunity Shield by Big Boss." },
  { timestamp: "09:38:20", text: "Archana Gautam & Asim Riaz nominated for Danger Zone." }
];

// --- APP STATE GLOBAL CONTAINER ---
let state = {
  contestants: [],
  tasks: [],
  activityLog: [],
  announcements: [],
  timerSeconds: 900, // 15 mins default
  timerRunning: false,
  timerInterval: null,
  pendingEvictionId: null
};

// --- WEB AUDIO SYNTHESIZER ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
}

function playAudioEffect(type) {
  try {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === 'gong') {
      // Deep metallic gong chime
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 2.5);
      gain.gain.setValueAtTime(0.8, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 2.5);
    } else if (type === 'siren') {
      // Emergency warning siren sweep
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(800, now + 0.3);
      osc.frequency.linearRampToValueAtTime(400, now + 0.6);
      osc.frequency.linearRampToValueAtTime(800, now + 0.9);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    } else if (type === 'buzzer') {
      // Low square wave fail buzzer
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(110, now);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    } else if (type === 'applause') {
      // Triumph fanfare chords
      [300, 400, 500, 600].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.3, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.5);
      });
    } else if (type === 'tick') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    console.log("Audio effect play error:", e);
  }
}

// --- WEB SPEECH SYNTHESIS (VOICE ANNOUNCEMENTS) ---
function speakAnnouncement(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // cancel previous
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 0.8; // deep authoritative voice
    utterance.volume = 1.0;
    
    // Select Hindi/Indian English voice if available
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('IN') || v.name.includes('India')) || voices[0];
    if (targetVoice) {
      utterance.voice = targetVoice;
    }
    window.speechSynthesis.speak(utterance);
  }
}

// --- INITIALIZATION AND LOCALSTORAGE PERSISTENCE ---
function initApp() {
  loadFromLocalStorage();
  setupEventListeners();
  startLiveClock();
  renderAllViews();
}

function loadFromLocalStorage() {
  const savedState = localStorage.getItem('bigg_boss_cmd_center_v1');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state.contestants = parsed.contestants || DEFAULT_CONTESTANTS;
      state.tasks = parsed.tasks || DEFAULT_TASKS;
      state.activityLog = parsed.activityLog || DEFAULT_ACTIVITY_LOG;
      state.announcements = parsed.announcements || [];
    } catch (e) {
      resetToDefaultState();
    }
  } else {
    resetToDefaultState();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('bigg_boss_cmd_center_v1', JSON.stringify({
    contestants: state.contestants,
    tasks: state.tasks,
    activityLog: state.activityLog,
    announcements: state.announcements
  }));
}

function resetToDefaultState() {
  state.contestants = JSON.parse(JSON.stringify(DEFAULT_CONTESTANTS));
  state.tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
  state.activityLog = JSON.parse(JSON.stringify(DEFAULT_ACTIVITY_LOG));
  state.announcements = [];
  saveToLocalStorage();
}

function resetToDemoData() {
  if (confirm("Reset all house state, points, and tasks to default demo data?")) {
    resetToDefaultState();
    renderAllViews();
    logActivity("Command Center reset to default demo state.");
    playAudioEffect('gong');
  }
}

// --- NAVIGATION & TABS ---
function setupEventListeners() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

  const targetNav = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  const targetPane = document.getElementById(`tab-${tabId}`);

  if (targetNav && targetPane) {
    targetNav.classList.add('active');
    targetPane.classList.add('active');

    // Update Header title
    const titles = {
      'dashboard': '<i class="fa-solid fa-gauge-high"></i> House Command HUD',
      'contestants': '<i class="fa-solid fa-users"></i> Contestant Roster & Management',
      'leaderboard': '<i class="fa-solid fa-trophy"></i> Official Live Leaderboard',
      'danger-zone': '<i class="fa-solid fa-biohazard red-text"></i> Danger Zone & Nominations',
      'tasks': '<i class="fa-solid fa-list-check"></i> Task Command Center',
      'announcements': '<i class="fa-solid fa-podcast"></i> Broadcast Announcement Center',
      'cctv': '<i class="fa-solid fa-video"></i> Live CCTV Surveillance Feed',
      'evicted': '<i class="fa-solid fa-door-open"></i> Hall of Evicted Housemates',
      'activity-log': '<i class="fa-solid fa-clock-rotate-left"></i> Command Center Audit Trail'
    };
    document.getElementById('currentPageTitle').innerHTML = titles[tabId] || 'Command Center';
  }
}

function startLiveClock() {
  setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: false }) + " IST";
    document.getElementById('liveClock').textContent = timeStr;
  }, 1000);
}

// --- LOGGING & AUDIT TRAIL ---
function logActivity(message) {
  const now = new Date();
  const timestamp = now.toLocaleTimeString('en-US', { hour12: false });
  const entry = { timestamp, text: message };
  state.activityLog.unshift(entry);
  if (state.activityLog.length > 50) state.activityLog.pop();
  saveToLocalStorage();
  renderActivityLog();
}

function renderActivityLog() {
  const miniFeed = document.getElementById('dashActivityFeed');
  const fullLog = document.getElementById('fullActivityLog');

  const miniHtml = state.activityLog.slice(0, 5).map(item => `
    <li class="activity-item">
      <span class="activity-time">${item.timestamp}</span>
      <span class="activity-text">${item.text}</span>
    </li>
  `).join('');

  const fullHtml = state.activityLog.map(item => `
    <li class="activity-item">
      <span class="activity-time">[${item.timestamp}]</span>
      <span class="activity-text">${item.text}</span>
    </li>
  `).join('');

  if (miniFeed) miniFeed.innerHTML = miniHtml || '<li>No recent activity.</li>';
  if (fullLog) fullLog.innerHTML = fullHtml || '<li>No audit logs recorded.</li>';
}

function clearActivityLog() {
  state.activityLog = [];
  saveToLocalStorage();
  renderActivityLog();
}

// --- MASTER COUNTDOWN TIMER ---
function updateTimerDisplay() {
  const mins = Math.floor(state.timerSeconds / 60);
  const secs = state.timerSeconds % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  document.getElementById('mainTimerDisplay').textContent = formatted;
  document.getElementById('miniTimerDisplay').textContent = formatted;
}

function startTimer() {
  if (state.timerRunning) return;
  state.timerRunning = true;
  document.getElementById('timerStatusBadge').textContent = 'COUNTING DOWN';
  document.getElementById('timerStatusBadge').className = 'badge badge-red pulse';
  document.getElementById('miniPlayIcon').className = 'fa-solid fa-pause';

  state.timerInterval = setInterval(() => {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      updateTimerDisplay();

      if (state.timerSeconds <= 10 && state.timerSeconds > 0) {
        playAudioEffect('tick');
      }
    } else {
      pauseTimer();
      playAudioEffect('siren');
      alert("🚨 TIME IS UP! Big Boss Task Countdown Expired!");
      logActivity("Task Countdown Timer completed.");
    }
  }, 1000);
}

function pauseTimer() {
  state.timerRunning = false;
  if (state.timerInterval) clearInterval(state.timerInterval);
  document.getElementById('timerStatusBadge').textContent = 'PAUSED';
  document.getElementById('timerStatusBadge').className = 'badge badge-gold';
  document.getElementById('miniPlayIcon').className = 'fa-solid fa-play';
}

function resetTimer() {
  pauseTimer();
  state.timerSeconds = 900; // 15 mins
  updateTimerDisplay();
  document.getElementById('timerStatusBadge').textContent = 'IDLE';
}

function addTimerMinutes(mins) {
  state.timerSeconds += mins * 60;
  updateTimerDisplay();
}

function toggleMainTimer() {
  if (state.timerRunning) pauseTimer();
  else startTimer();
}

// --- CORE RENDER HUB ---
function renderAllViews() {
  renderKPIStats();
  renderContestants();
  renderLeaderboard();
  renderDangerZone();
  renderTasks();
  renderEvictedWall();
  renderActivityLog();
  updateNavBadges();
}

function updateNavBadges() {
  const activeCount = state.contestants.filter(c => !c.isEvicted).length;
  const dangerCount = state.contestants.filter(c => c.isNominated && !c.isEvicted).length;
  const evictedCount = state.contestants.filter(c => c.isEvicted).length;
  const pendingTasks = state.tasks.filter(t => t.status === 'Pending' || t.status === 'In Progress').length;

  document.getElementById('navActiveCount').textContent = activeCount;
  document.getElementById('navDangerCount').textContent = dangerCount;
  document.getElementById('navEvictedCount').textContent = evictedCount;
  document.getElementById('navPendingTasks').textContent = pendingTasks;
}

// --- KPI STATS RENDER ---
function renderKPIStats() {
  const activeContestants = state.contestants.filter(c => !c.isEvicted);
  const captain = activeContestants.find(c => c.isCaptain);
  
  // Sorted active contestants
  const sorted = [...activeContestants].sort((a, b) => b.points - a.points);
  const topScorer = sorted[0];
  const nominatedList = activeContestants.filter(c => c.isNominated);
  const evictedList = state.contestants.filter(c => c.isEvicted);

  document.getElementById('statCaptain').textContent = captain ? captain.name : "Vacant";
  document.getElementById('statCaptainSub').textContent = captain ? `${captain.team} • Protected` : "No Captain Assigned";
  
  document.getElementById('statTopScorer').textContent = topScorer ? topScorer.name : "--";
  document.getElementById('statTopScorePts').textContent = topScorer ? `${topScorer.points} pts` : "0 pts";

  document.getElementById('statDangerCount').textContent = nominatedList.length;
  document.getElementById('statActiveCount').textContent = activeContestants.length;
  document.getElementById('statEvictedSub').textContent = `${evictedList.length} Evicted`;

  // Dynamic Drama Meter logic (based on nominations count + penalties)
  const dramaVal = Math.min(100, Math.max(30, (nominatedList.length * 20) + (evictedList.length * 10) + 15));
  document.getElementById('statDramaMeter').textContent = `${dramaVal}%`;
  document.getElementById('statDramaBar').style.width = `${dramaVal}%`;

  // Render Dash Danger List Preview
  const dashDangerList = document.getElementById('dashDangerList');
  if (dashDangerList) {
    if (nominatedList.length === 0) {
      dashDangerList.innerHTML = `<div class="text-muted p-2">No contestants currently in Danger Zone.</div>`;
    } else {
      dashDangerList.innerHTML = nominatedList.map(c => `
        <div class="danger-preview-item" style="display:flex; justify-content:space-between; align-items:center; padding: 8px 12px; background: rgba(255,0,85,0.1); border: 1px solid var(--red-primary); border-radius:6px; margin-bottom:6px;">
          <div>
            <strong class="red-text">${c.name}</strong> <small>(${c.team})</small>
          </div>
          <div>
            <span class="badge badge-red">${c.nominationVotes} Votes</span>
            <button class="btn-xs btn-red" onclick="openEvictionCeremonyModal('${c.id}')">Evict</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Render Team Rivalry Standings
  const teamStandingsWidget = document.getElementById('teamStandingsWidget');
  if (teamStandingsWidget) {
    const teams = ["Team Alpha", "Team Omega", "Team Renegade"];
    const teamTotals = teams.map(teamName => {
      const members = activeContestants.filter(c => c.team === teamName);
      const totalPts = members.reduce((sum, c) => sum + c.points, 0);
      return { teamName, totalPts, memberCount: members.length };
    });

    const maxPts = Math.max(...teamTotals.map(t => t.totalPts), 1);

    teamStandingsWidget.innerHTML = teamTotals.map(t => `
      <div style="margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <strong>${t.teamName} <small class="text-muted">(${t.memberCount} members)</small></strong>
          <span class="gold-text"><strong>${t.totalPts}</strong> pts</span>
        </div>
        <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;">
          <div style="height:100%; width:${(t.totalPts / maxPts) * 100}%; background: linear-gradient(90deg, var(--cyan-primary), var(--gold-primary));"></div>
        </div>
      </div>
    `).join('');
  }
}

// --- CONTESTANT MANAGEMENT RENDER & ACTIONS ---
function renderContestants() {
  const grid = document.getElementById('contestantsGrid');
  if (!grid) return;

  const searchQuery = (document.getElementById('contestantSearchInput')?.value || '').toLowerCase();
  const teamFilter = document.getElementById('teamFilter')?.value || 'ALL';
  const statusFilter = document.getElementById('statusFilter')?.value || 'ALL';

  const filtered = state.contestants.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery) || c.team.toLowerCase().includes(searchQuery) || c.role.toLowerCase().includes(searchQuery);
    const matchesTeam = teamFilter === 'ALL' || c.team === teamFilter;
    const matchesStatus = statusFilter === 'ALL' || (
      statusFilter === 'active' && !c.isEvicted && !c.isCaptain && !c.isImmune && !c.isNominated
    ) || (
      statusFilter === 'captain' && c.isCaptain
    ) || (
      statusFilter === 'immune' && c.isImmune
    ) || (
      statusFilter === 'nominated' && c.isNominated
    ) || (
      statusFilter === 'evicted' && c.isEvicted
    );

    return matchesSearch && matchesTeam && matchesStatus;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--text-muted);">No contestants found matching criteria.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(c => {
    let statusBadge = '';
    let cardClass = 'contestant-card';

    if (c.isEvicted) {
      statusBadge = '<span class="status-badge-ribbon badge-evicted">EVICTED</span>';
      cardClass += ' is-evicted';
    } else if (c.isCaptain) {
      statusBadge = '<span class="status-badge-ribbon badge-captain">CAPTAIN</span>';
      cardClass += ' is-captain';
    } else if (c.isImmune) {
      statusBadge = '<span class="status-badge-ribbon badge-immune">IMMUNE</span>';
    } else if (c.isNominated) {
      statusBadge = '<span class="status-badge-ribbon badge-nominated">NOMINATED</span>';
      cardClass += ' is-nominated';
    } else {
      statusBadge = '<span class="status-badge-ribbon badge-active">ACTIVE</span>';
    }

    return `
      <div class="${cardClass}">
        <div class="card-top-banner">
          ${statusBadge}
        </div>
        <div class="contestant-avatar-wrap">
          <img src="${c.avatar}" alt="${c.name}" class="contestant-avatar-img" onerror="this.src='https://via.placeholder.com/150/111/ffd700?text=${encodeURIComponent(c.name[0])}'">
        </div>
        <div class="contestant-info">
          <h3 class="c-name">${c.name}</h3>
          <div class="c-team">${c.team}</div>
          <div class="c-role">"${c.role}"</div>
          
          <div class="c-points-box">
            <span style="font-size:0.7rem; color:var(--text-muted); display:block;">CURRENT SCORE</span>
            <span class="c-pts-val">${c.points} <small style="font-size:0.8rem">PTS</small></span>
          </div>
        </div>

        <div class="c-actions">
          <button class="btn-secondary" onclick="openPointAdjustmentModal('${c.id}')"><i class="fa-solid fa-coins gold-text"></i> Points</button>
          <button class="btn-secondary ${c.isCaptain ? 'btn-gold' : ''}" onclick="toggleCaptaincy('${c.id}')"><i class="fa-solid fa-crown"></i> ${c.isCaptain ? 'Captain' : 'Make Captain'}</button>
          <button class="btn-secondary ${c.isImmune ? 'btn-gold' : ''}" onclick="toggleImmunity('${c.id}')"><i class="fa-solid fa-shield-halved"></i> ${c.isImmune ? 'Immune' : 'Shield'}</button>
          <button class="btn-secondary ${c.isNominated ? 'btn-red' : ''}" onclick="toggleNomination('${c.id}')"><i class="fa-solid fa-biohazard"></i> ${c.isNominated ? 'Nominated' : 'Nominate'}</button>
          <button class="btn-secondary" onclick="openEditContestantModal('${c.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
          ${!c.isEvicted ? `<button class="btn-secondary btn-red" onclick="openEvictionCeremonyModal('${c.id}')"><i class="fa-solid fa-door-open"></i> Evict</button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// --- CONTESTANT ACTIONS (CAPTAINCY, IMMUNITY, NOMINATION, EVICTION) ---
function toggleCaptaincy(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  if (contestant.isEvicted) {
    alert("Evicted contestants cannot be appointed House Captain!");
    return;
  }

  if (contestant.isCaptain) {
    contestant.isCaptain = false;
    logActivity(`House Captaincy revoked from ${contestant.name}.`);
  } else {
    // Unassign previous captain
    state.contestants.forEach(c => c.isCaptain = false);
    contestant.isCaptain = true;
    contestant.isImmune = true; // Captain gets automatic immunity shield
    logActivity(`👑 ${contestant.name} appointed as House Captain & granted Immunity!`);
    playAudioEffect('applause');
    speakAnnouncement(`Bigg Boss aadesh dete hain ki ${contestant.name} ab se House Captain hain!`);
  }

  saveToLocalStorage();
  renderAllViews();
}

function toggleImmunity(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  if (contestant.isEvicted) {
    alert("Evicted contestants cannot be granted immunity!");
    return;
  }

  contestant.isImmune = !contestant.isImmune;
  if (contestant.isImmune) {
    contestant.isNominated = false; // Remove nomination if immune
    logActivity(`🛡️ Immunity Shield granted to ${contestant.name}. Protected from nominations.`);
    playAudioEffect('gong');
  } else {
    logActivity(`Immunity Shield revoked from ${contestant.name}.`);
  }

  saveToLocalStorage();
  renderAllViews();
}

function toggleNomination(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  if (contestant.isEvicted) {
    alert("Evicted contestants cannot be nominated!");
    return;
  }

  if (contestant.isImmune) {
    playAudioEffect('buzzer');
    alert(`⛔ NOMINATION DENIED! ${contestant.name} is currently protected by an Immunity Shield!`);
    return;
  }

  contestant.isNominated = !contestant.isNominated;
  if (contestant.isNominated) {
    contestant.nominationVotes = (contestant.nominationVotes || 0) + 1;
    logActivity(`🚨 ${contestant.name} has been placed in the Danger Zone for eviction.`);
    playAudioEffect('siren');
  } else {
    logActivity(`${contestant.name} was saved and removed from Danger Zone.`);
  }

  saveToLocalStorage();
  renderAllViews();
}

// --- CONTESTANT MODAL HANDLERS ---
function openAddContestantModal() {
  document.getElementById('contestantModalTitle').innerHTML = '<i class="fa-solid fa-user-plus"></i> Add New Contestant';
  document.getElementById('cEditId').value = '';
  document.getElementById('cName').value = '';
  document.getElementById('cRole').value = '';
  document.getElementById('cAvatar').value = '';
  document.getElementById('cPoints').value = 100;
  openModal('contestantModal');
}

function openEditContestantModal(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  document.getElementById('contestantModalTitle').innerHTML = '<i class="fa-solid fa-pen"></i> Edit Contestant';
  document.getElementById('cEditId').value = contestant.id;
  document.getElementById('cName').value = contestant.name;
  document.getElementById('cTeam').value = contestant.team;
  document.getElementById('cRole').value = contestant.role;
  document.getElementById('cAvatar').value = contestant.avatar;
  document.getElementById('cPoints').value = contestant.points;
  openModal('contestantModal');
}

function handleSaveContestant(e) {
  e.preventDefault();
  const editId = document.getElementById('cEditId').value;
  const name = document.getElementById('cName').value.trim();
  const team = document.getElementById('cTeam').value;
  const role = document.getElementById('cRole').value.trim() || 'Housemate';
  const avatar = document.getElementById('cAvatar').value.trim() || `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`;
  const points = parseInt(document.getElementById('cPoints').value) || 100;

  if (editId) {
    const c = state.contestants.find(x => x.id === editId);
    if (c) {
      c.name = name;
      c.team = team;
      c.role = role;
      c.avatar = avatar;
      c.points = points;
      logActivity(`Updated contestant profile for ${name}.`);
    }
  } else {
    const newContestant = {
      id: "c_" + Date.now(),
      name,
      team,
      role,
      avatar,
      points,
      isCaptain: false,
      isImmune: false,
      isNominated: false,
      isEvicted: false,
      nominationVotes: 0,
      bio: "New contestant entered the Bigg Boss House."
    };
    state.contestants.push(newContestant);
    logActivity(`✨ New contestant ${name} joined ${team}!`);
    playAudioEffect('applause');
  }

  saveToLocalStorage();
  closeModal('contestantModal');
  renderAllViews();
}

// --- POINT ADJUSTMENT MODAL ---
function openPointAdjustmentModal(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  document.getElementById('pContestantId').value = contestant.id;
  document.getElementById('pTargetSummary').innerHTML = `
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px; background:rgba(0,0,0,0.3); padding:10px; border-radius:6px;">
      <img src="${contestant.avatar}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
      <div>
        <strong>${contestant.name}</strong> <small>(${contestant.team})</small>
        <div style="font-size:0.8rem; color:var(--gold-primary)">Current Points: ${contestant.points}</div>
      </div>
    </div>
  `;
  document.getElementById('pAmount').value = 50;
  document.getElementById('pReason').value = '';
  openModal('pointsModal');
}

function submitPointAdjustment() {
  const id = document.getElementById('pContestantId').value;
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  const type = document.querySelector('input[name="pType"]:checked').value;
  const amount = parseInt(document.getElementById('pAmount').value) || 0;
  const reason = document.getElementById('pReason').value.trim() || 'Manual Point Adjustment';

  if (amount <= 0) {
    alert("Please enter a valid positive points value.");
    return;
  }

  if (type === 'ADD') {
    contestant.points += amount;
    logActivity(`➕ Added ${amount} pts to ${contestant.name}. Reason: ${reason}`);
    playAudioEffect('gong');
  } else {
    contestant.points = Math.max(0, contestant.points - amount);
    logActivity(`➖ Deducted ${amount} pts from ${contestant.name}. Reason: ${reason}`);
    playAudioEffect('buzzer');
  }

  saveToLocalStorage();
  closeModal('pointsModal');
  renderAllViews();
}

// --- LIVE LEADERBOARD RENDER ---
function renderLeaderboard() {
  const activeList = state.contestants.filter(c => !c.isEvicted);
  const sorted = [...activeList].sort((a, b) => b.points - a.points);

  // Render Podium (Top 3)
  const podiumSection = document.getElementById('podiumSection');
  if (podiumSection) {
    if (sorted.length < 3) {
      podiumSection.innerHTML = '';
    } else {
      const top1 = sorted[0];
      const top2 = sorted[1];
      const top3 = sorted[2];

      podiumSection.innerHTML = `
        <div class="podium-card rank-2">
          <div class="podium-badge">🥈</div>
          <img src="${top2.avatar}" class="podium-avatar">
          <div class="podium-name">${top2.name}</div>
          <div class="podium-pts">${top2.points} pts</div>
          <small style="font-size:0.7rem; color:var(--cyan-primary)">${top2.team}</small>
        </div>

        <div class="podium-card rank-1">
          <div class="podium-badge">👑 🥇</div>
          <img src="${top1.avatar}" class="podium-avatar" style="border-width:3px;">
          <div class="podium-name gold-text">${top1.name}</div>
          <div class="podium-pts">${top1.points} pts</div>
          <small style="font-size:0.75rem; color:var(--gold-primary)">LEADER • ${top1.team}</small>
        </div>

        <div class="podium-card rank-3">
          <div class="podium-badge">🥉</div>
          <img src="${top3.avatar}" class="podium-avatar">
          <div class="podium-name">${top3.name}</div>
          <div class="podium-pts">${top3.points} pts</div>
          <small style="font-size:0.7rem; color:var(--cyan-primary)">${top3.team}</small>
        </div>
      `;
    }
  }

  // Render Top 5 HUD Leaderboard
  const dashBody = document.getElementById('dashTopLeaderboardBody');
  if (dashBody) {
    dashBody.innerHTML = sorted.slice(0, 5).map((c, idx) => `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <img src="${c.avatar}" style="width:28px; height:28px; border-radius:50%; object-fit:cover;">
            <strong>${c.name}</strong>
          </div>
        </td>
        <td><small class="cyan-text">${c.team}</small></td>
        <td><strong class="gold-text">${c.points}</strong></td>
        <td>${c.isCaptain ? '<span class="badge badge-gold">CAPTAIN</span>' : c.isNominated ? '<span class="badge badge-red">NOMINATED</span>' : '<span class="badge badge-cyan">ACTIVE</span>'}</td>
      </tr>
    `).join('');
  }

  // Render Full Leaderboard Table
  const fullBody = document.getElementById('fullLeaderboardBody');
  if (fullBody) {
    fullBody.innerHTML = sorted.map((c, idx) => {
      let pillClass = 'rank-pill';
      if (idx === 0) pillClass += ' gold';
      else if (idx === 1) pillClass += ' silver';
      else if (idx === 2) pillClass += ' bronze';

      return `
        <tr>
          <td><div class="${pillClass}">${idx + 1}</div></td>
          <td>
            <div style="display:flex; align-items:center; gap:12px;">
              <img src="${c.avatar}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border: 1px solid var(--gold-primary);">
              <div>
                <strong>${c.name}</strong>
                ${c.isCaptain ? '<i class="fa-solid fa-crown gold-text" style="margin-left:4px;"></i>' : ''}
              </div>
            </div>
          </td>
          <td><span class="cyan-text">${c.team}</span></td>
          <td><small class="text-muted">${c.role}</small></td>
          <td><strong class="gold-text" style="font-size:1.1rem; font-family:var(--font-mono);">${c.points}</strong></td>
          <td>
            <div style="display:flex; gap:4px;">
              ${c.isCaptain ? '<span class="badge badge-gold">CAPTAIN</span>' : ''}
              ${c.isImmune ? '<span class="badge badge-green">IMMUNE</span>' : ''}
              ${c.isNominated ? '<span class="badge badge-red">NOMINATED</span>' : ''}
              ${!c.isCaptain && !c.isImmune && !c.isNominated ? '<span class="badge badge-cyan">ACTIVE</span>' : ''}
            </div>
          </td>
          <td>
            <div style="display:flex; gap:4px;">
              <button class="btn-xs btn-gold" onclick="quickAdjustPoints('${c.id}', 50)">+50</button>
              <button class="btn-xs btn-red" onclick="quickAdjustPoints('${c.id}', -50)">-50</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function quickAdjustPoints(id, delta) {
  const c = state.contestants.find(x => x.id === id);
  if (!c) return;

  c.points = Math.max(0, c.points + delta);
  logActivity(`${delta > 0 ? '➕ Awarded' : '➖ Deducted'} ${Math.abs(delta)} pts ${delta > 0 ? 'to' : 'from'} ${c.name}.`);
  playAudioEffect(delta > 0 ? 'gong' : 'buzzer');
  saveToLocalStorage();
  renderAllViews();
}

function exportLeaderboard() {
  const activeList = state.contestants.filter(c => !c.isEvicted).sort((a,b) => b.points - a.points);
  let csv = "Rank,Name,Team,Role,Points,Status\n";
  activeList.forEach((c, idx) => {
    csv += `${idx+1},"${c.name}","${c.team}","${c.role}",${c.points},"${c.isCaptain?'Captain':c.isNominated?'Nominated':c.isImmune?'Immune':'Active'}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Bigg_Boss_Leaderboard_${Date.now()}.csv`;
  a.click();
}

// --- DANGER ZONE & NOMINATIONS SYSTEM ---
function renderDangerZone() {
  const nominatedList = state.contestants.filter(c => c.isNominated && !c.isEvicted);
  const dangerGrid = document.getElementById('dangerZoneGrid');
  document.getElementById('dangerZoneCountText').textContent = nominatedList.length;

  if (dangerGrid) {
    if (nominatedList.length === 0) {
      dangerGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">The Danger Zone is currently empty. No housemates nominated!</div>`;
    } else {
      dangerGrid.innerHTML = nominatedList.map(c => `
        <div class="danger-card-item">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${c.avatar}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid var(--red-primary);">
            <div>
              <h4 class="red-text" style="font-family:var(--font-hud);">${c.name}</h4>
              <small class="cyan-text">${c.team}</small>
            </div>
          </div>

          <div style="background:rgba(0,0,0,0.4); padding:8px; border-radius:6px; font-size:0.8rem;">
            <div>Nomination Votes Received: <strong class="red-text">${c.nominationVotes || 1}</strong></div>
            <div>Current Score: <strong>${c.points} pts</strong></div>
          </div>

          <button class="btn-primary glow-red btn-lg full-width" onclick="openEvictionCeremonyModal('${c.id}')">
            <i class="fa-solid fa-gavel"></i> EVICT CONTESTANT NOW
          </button>
        </div>
      `).join('');
    }
  }

  // Nomination Breakdown Table
  const breakBody = document.getElementById('nominationBreakdownBody');
  if (breakBody) {
    const activeList = state.contestants.filter(c => !c.isEvicted);
    breakBody.innerHTML = activeList.map(c => `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <img src="${c.avatar}" style="width:28px; height:28px; border-radius:50%; object-fit:cover;">
            <strong>${c.name}</strong>
          </div>
        </td>
        <td><span class="cyan-text">${c.team}</span></td>
        <td>${c.isImmune ? '<span class="badge badge-green">IMMUNE</span>' : '<span class="text-muted">Eligible</span>'}</td>
        <td><strong class="${c.nominationVotes > 0 ? 'red-text' : ''}">${c.nominationVotes || 0} Votes</strong></td>
        <td>${c.isNominated ? '<span class="badge badge-red">NOMINATED</span>' : '<span class="badge badge-cyan">SAFE</span>'}</td>
        <td>
          <button class="btn-xs ${c.isNominated ? 'btn-red' : 'btn-secondary'}" onclick="toggleNomination('${c.id}')">
            ${c.isNominated ? 'Remove Nomination' : 'Nominate'}
          </button>
        </td>
      </tr>
    `).join('');
  }
}

function openNominationProcessModal() {
  const activeList = state.contestants.filter(c => !c.isEvicted);
  const nominatorSelect = document.getElementById('nomNominator');
  nominatorSelect.innerHTML = activeList.map(c => `<option value="${c.id}">${c.name} (${c.team})</option>`).join('');

  updateNominationTargets();
  document.getElementById('nomReason').value = '';
  openModal('nominationModal');
}

function updateNominationTargets() {
  const nominatorId = document.getElementById('nomNominator').value;
  const eligibleTargets = state.contestants.filter(c => !c.isEvicted && c.id !== nominatorId && !c.isImmune);

  const targetSelect = document.getElementById('nomTarget');
  if (eligibleTargets.length === 0) {
    targetSelect.innerHTML = `<option value="">No eligible targets (all immune or evicted)</option>`;
  } else {
    targetSelect.innerHTML = eligibleTargets.map(c => `<option value="${c.id}">${c.name} (${c.team}) - ${c.isNominated ? 'Already Nominated' : 'Safe'}</option>`).join('');
  }
}

function submitNominationVote() {
  const nominatorId = document.getElementById('nomNominator').value;
  const targetId = document.getElementById('nomTarget').value;
  const reason = document.getElementById('nomReason').value.trim();

  const nominator = state.contestants.find(c => c.id === nominatorId);
  const target = state.contestants.find(c => c.id === targetId);

  if (!nominator || !target) {
    alert("Please select valid contestants.");
    return;
  }

  if (target.isImmune) {
    alert(`Cannot nominate ${target.name}! Protected by Immunity.`);
    return;
  }

  target.isNominated = true;
  target.nominationVotes = (target.nominationVotes || 0) + 1;

  logActivity(`🗳️ Confession Room: ${nominator.name} nominated ${target.name}. Reason: "${reason || 'Strategic choice'}"`);
  playAudioEffect('siren');

  saveToLocalStorage();
  closeModal('nominationModal');
  renderAllViews();
}

function simulatePublicEvictionVote() {
  const nominated = state.contestants.filter(c => c.isNominated && !c.isEvicted);
  if (nominated.length === 0) {
    alert("No contestants are currently in the Danger Zone to run an eviction poll.");
    return;
  }

  playAudioEffect('gong');
  let pollResults = "📊 BIGG BOSS PUBLIC EVICTION POLL SIMULATOR:\n\n";
  let lowestContestant = null;
  let lowestVotes = 100;

  nominated.forEach(c => {
    const pollPct = Math.floor(Math.random() * 40) + 10;
    pollResults += `• ${c.name}: ${pollPct}% Public Support\n`;
    if (pollPct < lowestVotes) {
      lowestVotes = pollPct;
      lowestContestant = c;
    }
  });

  pollResults += `\n⚠️ Highest Eviction Risk: ${lowestContestant.name} (${lowestVotes}% support).`;
  alert(pollResults);
}

// --- EVICTION CEREMONY DRAMATIC SYSTEM ---
function openEvictionCeremonyModal(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  state.pendingEvictionId = contestant.id;
  document.getElementById('evictModalAvatar').src = contestant.avatar;
  document.getElementById('evictModalName').textContent = contestant.name;
  document.getElementById('evictModalTeam').textContent = contestant.team;
  document.getElementById('evictModalPoints').textContent = contestant.points;
  
  const sorted = [...state.contestants].filter(c => !c.isEvicted).sort((a,b) => b.points - a.points);
  const rank = sorted.findIndex(c => c.id === contestant.id) + 1;
  document.getElementById('evictModalRank').textContent = `#${rank}`;

  playAudioEffect('siren');
  openModal('evictionCeremonyModal');
}

function confirmExecuteEviction() {
  const contestant = state.contestants.find(c => c.id === state.pendingEvictionId);
  if (!contestant) return;

  const reason = document.getElementById('evictReason').value || 'Big Boss House Eviction';

  contestant.isEvicted = true;
  contestant.isCaptain = false;
  contestant.isNominated = false;
  contestant.isImmune = false;
  contestant.evictedAt = new Date().toLocaleTimeString();

  playAudioEffect('gong');
  logActivity(`🚪 EVICTION CEREMONY: ${contestant.name} has been EVICTED from the Bigg Boss House! Reason: ${reason}`);

  speakAnnouncement(`Bigg Boss aadesh dete hain ki ${contestant.name} abhi ke abhi Bigg Boss house se bahar aa jayein!`);

  saveToLocalStorage();
  closeModal('evictionCeremonyModal');
  renderAllViews();
}

function reviveEvictedContestant(id) {
  const contestant = state.contestants.find(c => c.id === id);
  if (!contestant) return;

  contestant.isEvicted = false;
  logActivity(`🌟 WILDCARD ENTRY: ${contestant.name} has returned to the Bigg Boss House!`);
  playAudioEffect('applause');
  saveToLocalStorage();
  renderAllViews();
}

function renderEvictedWall() {
  const evictedList = state.contestants.filter(c => c.isEvicted);
  const grid = document.getElementById('evictedGrid');

  if (grid) {
    if (evictedList.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">No contestants have been evicted yet. The house is full!</div>`;
    } else {
      grid.innerHTML = evictedList.map(c => `
        <div class="contestant-card is-evicted">
          <div class="card-top-banner">
            <span class="status-badge-ribbon badge-evicted">EVICTED</span>
          </div>
          <div class="contestant-avatar-wrap">
            <img src="${c.avatar}" class="contestant-avatar-img">
          </div>
          <div class="contestant-info">
            <h3 class="c-name">${c.name}</h3>
            <div class="c-team">${c.team}</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">Evicted at: ${c.evictedAt || 'Recently'}</div>
          </div>
          <div class="c-actions">
            <button class="btn-primary full-width" onclick="reviveEvictedContestant('${c.id}')">
              <i class="fa-solid fa-rotate-left"></i> Wildcard Re-entry
            </button>
          </div>
        </div>
      `).join('');
    }
  }
}

// --- TASK MANAGEMENT SYSTEM ---
function renderTasks() {
  const grid = document.getElementById('tasksGrid');
  if (!grid) return;

  grid.innerHTML = state.tasks.map(t => {
    let taskClass = 'task-card';
    if (t.status === 'Completed') taskClass += ' task-completed';
    if (t.status === 'Failed') taskClass += ' task-failed';

    return `
      <div class="${taskClass}">
        <div>
          <div class="task-header">
            <h4 class="task-title">${t.title}</h4>
            <span class="task-cat-badge">${t.category}</span>
          </div>
          <p class="task-rules">${t.description}</p>
          <div style="font-size:0.8rem; margin-bottom:12px;">
            Assigned: <strong class="cyan-text">${t.assignedTeam}</strong> | Duration: <strong>${t.durationMinutes} mins</strong>
          </div>
          <div style="display:flex; gap:12px; font-size:0.85rem; font-weight:700; margin-bottom:12px;">
            <span class="green-text">+${t.reward} Reward Pts</span>
            <span class="red-text">-${t.penalty} Penalty Pts</span>
          </div>
        </div>

        <div class="task-footer">
          <div>Status: <span class="badge ${t.status === 'Completed' ? 'badge-green' : t.status === 'Failed' ? 'badge-red' : 'badge-gold'}">${t.status}</span></div>
          <div style="display:flex; gap:4px;">
            ${t.status !== 'Completed' ? `<button class="btn-xs btn-gold" onclick="completeTask('${t.id}')">Complete</button>` : ''}
            ${t.status !== 'Failed' ? `<button class="btn-xs btn-red" onclick="failTask('${t.id}')">Fail</button>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openCreateTaskModal() {
  document.getElementById('tTitle').value = '';
  document.getElementById('tDesc').value = '';
  document.getElementById('tReward').value = 100;
  document.getElementById('tPenalty').value = 50;
  document.getElementById('tTimer').value = 15;
  openModal('taskModal');
}

function handleSaveTask(e) {
  e.preventDefault();
  const title = document.getElementById('tTitle').value.trim();
  const category = document.getElementById('tCategory').value;
  const description = document.getElementById('tDesc').value.trim();
  const reward = parseInt(document.getElementById('tReward').value) || 100;
  const penalty = parseInt(document.getElementById('tPenalty').value) || 50;
  const durationMinutes = parseInt(document.getElementById('tTimer').value) || 15;

  const newTask = {
    id: "t_" + Date.now(),
    title,
    category,
    description,
    reward,
    penalty,
    durationMinutes,
    status: "Pending",
    assignedTeam: "All Teams"
  };

  state.tasks.push(newTask);
  logActivity(`📋 New Task created: "${title}" (${reward} reward pts).`);
  saveToLocalStorage();
  closeModal('taskModal');
  renderAllViews();
}

function addPresetTask(type) {
  const presets = {
    'ration': {
      title: "Luxury Budget Ration Lockdown",
      category: "Luxury Budget",
      description: "Housemates must hold heavy grocery baskets without letting them touch the floor.",
      reward: 120,
      penalty: 60,
      durationMinutes: 15
    },
    'captaincy': {
      title: "Captaincy Flag Tug-of-War",
      category: "Captaincy",
      description: "Teams battle in activity zone to secure the golden captaincy flag.",
      reward: 200,
      penalty: 80,
      durationMinutes: 20
    },
    'luxury': {
      title: "Confession Room Truth Interrogation",
      category: "Secret Mission",
      description: "Big Boss asks 5 direct questions to team representatives.",
      reward: 150,
      penalty: 50,
      durationMinutes: 10
    }
  };

  const preset = presets[type];
  if (preset) {
    state.tasks.push({
      id: "t_" + Date.now(),
      ...preset,
      status: "Pending",
      assignedTeam: "All Teams"
    });
    logActivity(`📋 Preset Task Added: ${preset.title}`);
    saveToLocalStorage();
    renderAllViews();
  }
}

function completeTask(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;

  task.status = "Completed";
  // Award reward points to all active contestants
  state.contestants.forEach(c => {
    if (!c.isEvicted) c.points += task.reward;
  });

  logActivity(`🏆 TASK COMPLETED: "${task.title}". All active housemates awarded +${task.reward} points!`);
  playAudioEffect('applause');
  speakAnnouncement(`Bigg Boss badhai dete hain! Task successfully complete ho gaya hai!`);

  saveToLocalStorage();
  renderAllViews();
}

function failTask(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;

  task.status = "Failed";
  // Deduct penalty points from all active contestants
  state.contestants.forEach(c => {
    if (!c.isEvicted) c.points = Math.max(0, c.points - task.penalty);
  });

  logActivity(`❌ TASK FAILED: "${task.title}". All active housemates penalized -${task.penalty} points!`);
  playAudioEffect('buzzer');
  speakAnnouncement(`Bigg Boss aadesh dete hain ki task fail hone ki wajah se ration aur points deduct kiye jate hain!`);

  saveToLocalStorage();
  renderAllViews();
}

// --- ANNOUNCEMENT SYSTEM ---
function openAnnouncementModal() {
  switchTab('announcements');
}

function fillAnnouncementPreset(val) {
  if (val) {
    document.getElementById('announceCustomText').value = val;
  }
}

function triggerBroadcastAnnouncement() {
  const text = document.getElementById('announceCustomText').value.trim();
  if (!text) {
    alert("Please type or select an announcement message.");
    return;
  }

  const useVoice = document.getElementById('announceVoiceSynth').checked;
  const useChime = document.getElementById('announceChime').checked;
  const useFlash = document.getElementById('announceFlash').checked;

  if (useChime) {
    playAudioEffect('gong');
    setTimeout(() => playAudioEffect('siren'), 400);
  }

  if (useFlash) {
    document.getElementById('announcementOverlayText').textContent = `"${text}"`;
    document.getElementById('announcementOverlay').classList.add('active');
  }

  if (useVoice) {
    speakAnnouncement(text);
  }

  // Update top ticker
  document.getElementById('tickerContent').textContent = `"${text}" • REALTIME BIGG BOSS COMMAND CENTER`;

  logActivity(`🎙️ BIGG BOSS ANNOUNCEMENT: "${text}"`);
  state.announcements.unshift({ timestamp: new Date().toLocaleTimeString(), text });
  saveToLocalStorage();
  renderAnnouncementHistory();
}

function renderAnnouncementHistory() {
  const list = document.getElementById('announcementHistoryList');
  if (list) {
    list.innerHTML = state.announcements.map(a => `
      <li style="padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size:0.88rem;">
        <span class="red-text">[${a.timestamp}]</span> <strong>"${a.text}"</strong>
      </li>
    `).join('');
  }
}

function closeAnnouncementOverlay() {
  document.getElementById('announcementOverlay').classList.remove('active');
}

// --- GENERAL MODAL HELPERS ---
function openModal(modalId) {
  document.getElementById(modalId)?.classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId)?.classList.remove('active');
}

// Global click outside modal listener
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// INITIALIZE APP ON LOAD
document.addEventListener('DOMContentLoaded', initApp);
