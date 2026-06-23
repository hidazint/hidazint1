/**
 * ====================================================================
 * Cybernetic Portfolio Javascript Core Engine
 * Handcrafted for direct static running in VS Code / Modern browsers
 * ====================================================================
 */

// Portfolio standard text dataset
const PORTFOLIO_DATA = {
  personal: {
    fullName: "Muhamad Arya Hidayatullah",
    roles: [
      "Computer Systems Student",
      "IoT Developer",
      "Network Engineer",
      "Web Developer"
    ]
  },
  skills: [
    {
      title: "Hardware & IoT",
      skills: [
        { name: "Computer Assembly", level: 90 },
        { name: "Microcontroller", level: 85 },
        { name: "ESP32 & ESP8266", level: 90 },
        { name: "Arduino Platforms", level: 92 },
        { name: "Raspberry Pi Single-Board", level: 80 }
      ]
    },
    {
      title: "Software & Languages",
      skills: [
        { name: "HTML & CSS3", level: 95 },
        { name: "JavaScript ES6+", level: 88 },
        { name: "PHP Development", level: 85 },
        { name: "Python Scripting", level: 80 },
        { name: "C++ (Arduino IDE)", level: 88 },
        { name: "MySQL & Database Admin", level: 85 }
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Ubuntu Server", level: 88 },
        { name: "Linux Administration & Bash", level: 85 },
        { name: "Windows Server Admin", level: 75 }
      ]
    },
    {
      title: "Networking & Security",
      skills: [
        { name: "Cisco IOS Configuration", level: 82 },
        { name: "Mikrotik RouterOS", level: 85 },
        { name: "TCP/IP Suite", level: 90 },
        { name: "DNS, DHCP & Active Directory", level: 88 },
        { name: "IP Routing (OSPF, RIP)", level: 80 }
      ]
    },
    {
      title: "Tools & Utilities",
      skills: [
        { name: "Visual Studio Code", level: 95 },
        { name: "GitHub / Git Version Control", level: 88 },
        { name: "VirtualBox & VMware virtualization", level: 85 },
        { name: "Wireshark Packet Analyzer", level: 80 }
      ]
    }
  ]
};

// Document Load entrypoint
document.addEventListener("DOMContentLoaded", () => {
  // Initialize dark mode status from storage or defaults to dark
  initDarkModeTheme();

  // Initialize background cyber matrix canvas
  initBackgroundGridCanvas();

  // Initialize scrolling interactions (back to top and sticky header)
  initScrollListeners();

  // Initialize typing banner console
  initDynamicTypingEngine();

  // Initialize Cat Avatar parameters and click logic
  initCyberCatSystem();

  // Initialize download CV modal controls
  initDownloadCvModal();

  // Initialize interactive contact form
  initTelemetryFormSubmit();

  // Initialize Interactive Skills category filter tabs
  initSkillsDashboardTabs();
});

/**
 * 1. Dark & Light Theme controller
 */
function initDarkModeTheme() {
  const themeToggler = document.getElementById("theme-toggler");
  const localStorageTheme = localStorage.getItem("alex_portfolio_theme");

  // Default to Dark theme
  const isDarkDefault = localStorageTheme !== "light";
  
  if (isDarkDefault) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIconAndLabels();

  if (themeToggler) {
    themeToggler.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      if (isCurrentlyDark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("alex_portfolio_theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("alex_portfolio_theme", "dark");
      }
      updateThemeIconAndLabels();
    });
  }
}

function updateThemeIconAndLabels() {
  const themeToggler = document.getElementById("theme-toggler");
  if (!themeToggler) return;
  const isDark = document.documentElement.classList.contains("dark");
  
  if (isDark) {
    themeToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    themeToggler.title = "Nyalakan Mode Terang";
  } else {
    themeToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    themeToggler.title = "Nyalakan Mode Gelap";
  }
}

/**
 * 2. Background cyber circuit nodes dynamic canvas animator
 */
function initBackgroundGridCanvas() {
  const canvas = document.getElementById("cyber-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);
  });

  // Particle class pattern
  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = document.documentElement.classList.contains("dark") 
        ? "rgba(6, 182, 212, 0.15)" 
        : "rgba(37, 99, 235, 0.08)";
      ctx.fill();
    }
  }

  // Circuits node-path connection data
  class Circuit {
    constructor() {
      this.nodes = [];
      this.progress = 0;
      this.speed = 0.003 + Math.random() * 0.004;
      this.generateNewNodes();
    }
    generateNewNodes() {
      this.nodes = [];
      let currentX = Math.random() * width;
      let currentY = Math.random() * height;
      this.nodes.push({ x: currentX, y: currentY });

      for (let i = 0; i < 4; i++) {
        const direction = Math.random() > 0.5;
        const offset = (Math.random() - 0.5) * (width * 0.25);
        if (direction) {
          currentX += offset;
        } else {
          currentY += offset;
        }
        this.nodes.push({ 
          x: Math.max(0, Math.min(width, currentX)), 
          y: Math.max(0, Math.min(height, currentY)) 
        });
      }
    }
    update() {
      this.progress += this.speed;
      if (this.progress >= this.nodes.length - 1) {
        this.progress = 0;
        this.generateNewNodes();
      }
    }
    draw() {
      if (this.nodes.length < 2) return;
      const isDark = document.documentElement.classList.contains("dark");
      
      // Draw path lines
      ctx.beginPath();
      ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
      for (let i = 1; i < this.nodes.length; i++) {
        ctx.lineTo(this.nodes[i].x, this.nodes[i].y);
      }
      ctx.strokeStyle = isDark ? "rgba(6,182,212,0.04)" : "rgba(37,99,235,0.03)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw shiny moving node
      const segmentIndex = Math.floor(this.progress);
      const segmentProgress = this.progress - segmentIndex;
      const p1 = this.nodes[segmentIndex];
      const p2 = this.nodes[segmentIndex + 1];

      if (p1 && p2) {
        const targetX = p1.x + (p2.x - p1.x) * segmentProgress;
        const targetY = p1.y + (p2.y - p1.y) * segmentProgress;
        ctx.beginPath();
        ctx.arc(targetX, targetY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(6, 182, 212, 0.4)" : "rgba(37, 99, 235, 0.3)";
        ctx.fill();
      }
    }
  }

  const particles = Array.from({ length: 30 }, () => new Particle());
  const circuits = Array.from({ length: 6 }, () => new Circuit());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    circuits.forEach(c => {
      c.update();
      c.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * 3. Scrolling interactions & Back to top visibility
 */
function initScrollListeners() {
  const backToTopBtn = document.getElementById("back-to-top");
  const header = document.getElementById("sticky-header");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sticky header blurring state
    if (scrollY > 50) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }

    // Scroll back to top trigger
    if (scrollY > 300) {
      if (backToTopBtn) {
        backToTopBtn.classList.remove("hidden");
        backToTopBtn.classList.add("flex");
      }
    } else {
      if (backToTopBtn) {
        backToTopBtn.classList.add("hidden");
        backToTopBtn.classList.remove("flex");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/**
 * 4. Roles Typewriter Console Simulation
 */
function initDynamicTypingEngine() {
  const typingOutput = document.getElementById("typing-output");
  if (!typingOutput) return;

  const roles = PORTFOLIO_DATA.personal.roles;
  let currentRoleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 150;

  function type() {
    const fullText = roles[currentRoleIdx];
    
    if (isDeleting) {
      typingOutput.textContent = fullText.substring(0, charIdx - 1);
      charIdx--;
      delay = 70;
    } else {
      typingOutput.textContent = fullText.substring(0, charIdx + 1);
      charIdx++;
      delay = 120;
    }

    if (!isDeleting && charIdx === fullText.length) {
      // Completed typing, pause before deleting
      isDeleting = true;
      delay = 2000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      currentRoleIdx = (currentRoleIdx + 1) % roles.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1000);
}

/**
 * 5. Interactive Cyber Cat System
 */
function initCyberCatSystem() {
  const catSvg = document.getElementById("cyber-cat-svg");
  const dialogBubble = document.getElementById("dialog-bubble");
  const purrProgress = document.getElementById("purr-progress");
  const purrPercentage = document.getElementById("purr-percentage");

  if (!catSvg) return;

  let purrLevel = 100;

  const CAT_LOGS = [
    "MEOW_PROTOCOL: [SUCCESS]",
    "SYSTEM_STATUS: PURRING",
    "cat_engine: stable // rpm 1250",
    "cat /dev/mouse > /dev/null",
    "BASH_HISTORY: track_red_dot.sh",
    "glowing_eyes: calibrating...",
    "curiosity_index: 99.42%",
    "bread_loaf_state: OVERCLOCK",
    "nip_sensor: SIGNAL_HIGH",
    "nap_timer: COUNTDOWN_SUSPENDED",
    "cpu_temp: 37°C // cozy_level: ultra",
    "purring_feedback: 100% active",
    "hardware_kernel: scratch_post_detected"
  ];

  catSvg.addEventListener("click", () => {
    // Increase progress gauge
    purrLevel = Math.min(purrLevel + 12, 150);
    updatePurrometerUI();

    // Spawn random high-tech log dialogue dialog bubble
    const randomLog = CAT_LOGS[Math.floor(Math.random() * CAT_LOGS.length)];
    if (dialogBubble) {
      dialogBubble.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 animate-pulse text-purple-400 shrink-0"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        <span>${randomLog}</span>
      `;
      
      // Trigger simple pop visual effect
      dialogBubble.classList.remove("scale-95", "opacity-0");
      dialogBubble.classList.add("scale-100", "opacity-100");
    }

    // Toggle glowing eyes or pupil dilation conceptually
    const pupilLeft = document.getElementById("pupil-l");
    const pupilRight = document.getElementById("pupil-r");
    if (pupilLeft && pupilRight) {
      pupilLeft.classList.toggle("dilated");
      pupilRight.classList.toggle("dilated");
    }
  });

  // Slowly decay local cozy purring level over time
  setInterval(() => {
    purrLevel = Math.max(purrLevel - 3, 60);
    updatePurrometerUI();
  }, 3500);

  function updatePurrometerUI() {
    if (purrProgress && purrPercentage) {
      const displayVal = Math.min(purrLevel, 100);
      purrProgress.style.width = `${displayVal}%`;
      purrPercentage.textContent = `${purrLevel}%`;
    }
  }
}

/**
 * 6. Download CV Simulation Progress Modal Dialog
 */
function initDownloadCvModal() {
  const downloadBtn = document.getElementById("hero-download-cv");
  const modal = document.getElementById("cv-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const progressBar = document.getElementById("cv-progress-bar");
  const progressText = document.getElementById("cv-progress-percent");
  const statusLine = document.getElementById("cv-status-line");

  if (!downloadBtn || !modal) return;

  const STATUS_LOGS = [
    "LOG: Mengaktifkan port VPN SSL terenkripsi...",
    "LOG: Mencocokkan otentikasi PGP key 0x82FA93DF...",
    "LOG: Mengunduh data siber-kompotensi v4.1...",
    "LOG: Memindai malware & checksum MD5 SHA-256...",
    "LOG: Mengonstruksi berkas PDF lokal Muhamad Arya CV...",
    "DECRYPT: [COMPLETE] File siap dibuka di direktori lokal Anda!"
  ];

  downloadBtn.addEventListener("click", () => {
    // Show download simulated modal
    modal.classList.add("flex");
    modal.classList.remove("hidden");

    // Start progress
    let currentPercent = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "0%";
    statusLine.textContent = STATUS_LOGS[0];

    const timer = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 8) + 3;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(timer);
        statusLine.textContent = STATUS_LOGS[STATUS_LOGS.length - 1];
        
        // Final completion file action simulation trigger
        setTimeout(() => {
          triggerFakePhysicalDownload();
        }, 800);
      } else {
        // Change text status according to percentage range
        const logIndex = Math.min(Math.floor((currentPercent / 100) * STATUS_LOGS.length), STATUS_LOGS.length - 2);
        statusLine.textContent = STATUS_LOGS[logIndex];
      }

      progressBar.style.width = `${currentPercent}%`;
      progressText.textContent = `${currentPercent}%`;
    }, 180);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }

  // Close when clicking background outside the card
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
}

function triggerFakePhysicalDownload() {
  // Create virtual element to download a template structured markdown or PDF representation
  const markdownText = `# CV MUHAMAD ARYA HIDAYATULLAH - SISTEM KOMPUTER & IOT ACADEMY
--------------------------------------------------------------
Nama Lengkap      : Muhamad Arya Hidayatullah
Fokus Studi       : Sistem Komputer, IoT, Embedded Systems & Networks
Status Autentikasi : DECRYPTED - VERIFIED VIA MEOW_PROTOCOL 

Motto: menjembatani hardware mikrokontroler dengan aplikasi web modern dan jaringan siber-fisik.`;

  const blob = new Blob([markdownText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Muhamad_Arya_CV_Decrypted.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * 7. Secure Telemetry dispatch form submit animator & toast triggering
 */
function initTelemetryFormSubmit() {
  const form = document.getElementById("comms-form");
  const formSubmitBtn = document.getElementById("submit-contact");
  const successToast = document.getElementById("success-toast");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-form-name");
    const emailInput = document.getElementById("contact-form-email");
    const messageInput = document.getElementById("contact-form-message");

    if (!nameInput.value || !emailInput.value || !messageInput.value) return;

    // Trigger encryption submitting visualizer
    const originalBtnContent = formSubmitBtn.innerHTML;
    formSubmitBtn.disabled = true;
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      formSubmitBtn.innerHTML = `
        <svg class="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
        <span>TRANSMITTING ENCRYPTED COMM LOGS: ${progress}%</span>
      `;

      if (progress >= 100) {
        clearInterval(interval);
        
        // Reset button
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = originalBtnContent;

        // Clear inputs
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        // Trigger floating success alert toast
        if (successToast) {
          successToast.classList.remove("hidden");
          successToast.classList.add("flex");
          
          setTimeout(() => {
            successToast.classList.remove("flex");
            successToast.classList.add("hidden");
          }, 4500);
        }
      }
    }, 150);
  });
}

/**
 * 8. Skills category interactive dashboard filter matching
 */
function initSkillsDashboardTabs() {
  const tabsWrapper = document.getElementById("skills-filter-tabs");
  const dashboardGrid = document.getElementById("skills-dashboard-grid");

  if (!tabsWrapper || !dashboardGrid) return;

  const buttons = tabsWrapper.querySelectorAll("button");
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Clear active style from other buttons
      buttons.forEach(b => {
        b.className = "px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all bg-slate-900/60 text-gray-400 hover:text-white";
      });

      // Add active style to self
      btn.className = "px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]";

      const selectedCategory = btn.getAttribute("data-category");
      const categoryPanels = dashboardGrid.querySelectorAll(".skill-category-panel");

      categoryPanels.forEach(panel => {
        const catTitle = panel.getAttribute("data-title");
        if (selectedCategory === "All" || catTitle === selectedCategory) {
          panel.style.display = "block";
          panel.classList.add("animate-fade-in");
        } else {
          panel.style.display = "none";
          panel.classList.remove("animate-fade-in");
        }
      });
    });
  });
}
