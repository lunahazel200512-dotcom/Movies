// ============================================================
// GlassWave — script.js  (Clean, error-free, production build)
// ============================================================

// --- 1. MOVIES DATABASE ---
const movies = [

    // ============================================================
    // 🎬 POPULAR CARTOONS 2025–2026
    // ============================================================
    {
        id: "youth-2026",
        title: "Youth (2026)",
        rating: "7.9",
        quality: "FHD",
        img: "https://myimg.click/images/2026/04/16/Youth-2026.jpg",
        category: "Animation, Action, Adventure",
        duration: "02:24:00",
        casting: "Yanting Lü, Joseph, Mo Han, Michelle Yeoh",
        description: "After a great catastrophe, the souls of Nezha and Aobing are saved, but their bodies face ruin. To give them new life, Taiyi Zhenren turns to the mystical seven-colored lotus in a daring bid to rebuild them and change their fate. The highest-grossing animated film of all time with $2.26 billion worldwide.",
        imdbId: "tt38693888",
        server1: "https://vidsrc.xyz/embed/movie/tt38693888",
        server2: "https://vsembed.ru/embed/movie?imdb=tt38693888",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2026-04-26"
    },
    {
        title: "Ne Zha 2 (2025)",
        rating: "7.9",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BOGM5NjIwYjMtZGFkNi00MDIwLWEyNjMtMWY1NGY3MjA1OGE0XkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Action, Adventure",
        duration: "02:24:00",
        casting: "Yanting Lü, Joseph, Mo Han, Michelle Yeoh",
        description: "After a great catastrophe, the souls of Nezha and Aobing are saved, but their bodies face ruin. To give them new life, Taiyi Zhenren turns to the mystical seven-colored lotus in a daring bid to rebuild them and change their fate. The highest-grossing animated film of all time with $2.26 billion worldwide.",
        imdbId: "tt34956443",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "zootopia-2-2025",
        title: "Zootopia 2 (2025)",
        rating: "8.1",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BNjkxMDUzMDktOTQ1OS00YWVkLTgxZGItZGZmMmJlMGEyNjZkXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Adventure, Comedy",
        duration: "01:49:00",
        casting: "Ginnifer Goodwin, Jason Bateman, Ke Huy Quan, Idris Elba",
        description: "Brave rabbit cop Judy Hopps and her fox partner Nick Wilde team up again to crack a new case — the most perilous and intricate of their careers — going undercover into the sketchiest corners of Zootopia. The second-highest-grossing animated film of all time with $1.74 billion worldwide.",
        imdbId: "tt26443597",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "kpop-demon-hunters-2025",
        title: "KPop Demon Hunters (2025)",
        rating: "7.5",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BN2ZhOGRiZGMtMDMwMC00ZDQ3LWEyY2QtZjk4YzkwNDUwN2U1XkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Action, Musical",
        duration: "01:35:00",
        casting: "Arden Cho, May Hong, Ji-young Yoo, Ahn Hyo-seop",
        description: "A world-renowned K-Pop girl group balance their lives in the spotlight with their secret identities as demon hunters. Oscar-nominated for Best Animated Feature and Best Original Song ('Golden'), this Netflix musical phenomenon dominated global watchlists in 2025.",
        imdbId: "tt14205554",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "demon-slayer-infinity-castle-2025",
        title: "Demon Slayer: Infinity Castle (2025)",
        rating: "8.4",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BOTkzMmVlOGMtOWFiMS00MjY0LWI5ZWMtNjM2YzkzMTFkZWNhXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Action, Adventure, Anime",
        duration: "02:35:00",
        casting: "Zach Aguilar, Abby Trott, Aleks Le, Erika Harlacher",
        description: "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight. The first entry in the final trilogy grossed $774 million worldwide, setting a new record for highest first-day gross in Japanese cinema history.",
        imdbId: "tt32820897",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "the-bad-guys-2-2025",
        title: "The Bad Guys 2 (2025)",
        rating: "7.2",
        quality: "HD 720p",
        img: "https://m.media-amazon.com/images/M/MV5BMjBiMTIxNTktMDk2NS00YzM5LWIzZTQtY2FkNmVkMzk2ZWU4XkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Action, Comedy",
        duration: "01:40:00",
        casting: "Sam Rockwell, Marc Maron, Awkwafina, Craig Robinson",
        description: "The Bad Guys struggle to find trust and acceptance in their newly minted lives as Good Guys, when they are pulled out of retirement and forced into 'one last job' by an all-female squad of criminals. Bigger, bolder, and badder than the original.",
        imdbId: "tt30017619",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "elio-2025",
        title: "Elio (2025)",
        rating: "6.6",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BMDFhMTY5ZGMtOTAyOS00N2Q1LTllYjUtNDNkNjE5ZGQyZDZkXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Adventure, Comedy",
        duration: "01:38:00",
        casting: "Yonas Kibreab, Zoe Saldaña, Brad Garrett, Jameela Jamil",
        description: "Elio, a space-obsessed 11-year-old with an active imagination, is accidentally beamed up to the Communiverse — an interplanetary organization home to aliens from across the galaxy. Mistaken for Earth's leader, he must form new bonds, survive intergalactic chaos, and discover who he is truly meant to be. Oscar-nominated Pixar adventure.",
        imdbId: "tt4900148",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "dog-man-2025",
        title: "Dog Man (2025)",
        rating: "6.3",
        quality: "HD 720p",
        img: "https://m.media-amazon.com/images/M/MV5BZTFkOWZiZGQtYWFhNS00ZWI4LWExMjAtNDQ5ZGI1MzM3MzQyXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Action, Comedy, Family",
        duration: "01:29:00",
        casting: "Pete Davidson, Lil Rel Howery, Isla Fisher, Ricky Gervais",
        description: "When a faithful police dog and his human officer are fused together by a harebrained surgery, Dog Man is born — sworn to protect and serve, fetch, sit, and roll over. He must stop the villainous Petey the Cat from cloning himself and doubling his evil abilities. From the creators of Kung Fu Panda.",
        imdbId: "tt10954718",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "wallace-gromit-vengeance-2025",
        title: "Wallace & Gromit: Vengeance Most Fowl (2025)",
        rating: "7.5",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BZDE2YjBhMmMtZmY3OC00NTAyLWJiNjMtZGI5NDI3ZTdlMzhhXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Adventure, Comedy",
        duration: "01:18:00",
        casting: "Ben Whitehead, Peter Kay, Lauren Patel, Reece Shearsmith",
        description: "Top dog Gromit springs into action to save his master when Wallace's high-tech invention goes rogue and he is framed for a series of suspicious crimes. The beloved stop-motion duo return in a cautionary AI comedy with a 100% Rotten Tomatoes score — BAFTA winner for Best Animated Film.",
        imdbId: "tt17163970",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "smurfs-2025",
        title: "Smurfs (2025)",
        rating: "6.1",
        quality: "HD 720p",
        img: "https://m.media-amazon.com/images/M/MV5BYzVmYzVkMWUtOGRhNy00NzIyLWIwMTQtNTQ4YzI5NWI4MjczXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Adventure, Comedy, Family",
        duration: "01:35:00",
        casting: "Rihanna, James Corden, Nick Offerman, Billie Lourd",
        description: "When Papa Smurf is taken by the evil wizards Razamel and Gargamel, Smurfette leads the Smurfs on a daring mission into the real world to save him. Featuring Rihanna as Smurfette in an all-new animated adventure full of music, magic, and comedy.",
        imdbId: "tt18069420",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    {
        id: "in-your-dreams-2025",
        title: "In Your Dreams (2025)",
        rating: "7.1",
        quality: "FHD",
        img: "https://m.media-amazon.com/images/M/MV5BYjI3ZTIzNGQtOGM4OC00YzZkLTgyNmMtNTRkMWI1MGNmNGEyXkEyXkFqcGc@._V1_SX300.jpg",
        category: "Animation, Adventure, Comedy, Family",
        duration: "01:30:00",
        casting: "Jolie Hoang-Rappaport, Elias Janssen, Craig Robinson, Jennifer Coolidge",
        description: "Stevie and her little brother Elliot journey into the wildly absurd landscape of their own dreams to ask the Sandman to grant them the perfect family. A heartfelt Netflix animated adventure praised for its Pixar-quality visuals, charm, and emotional depth.",
        imdbId: "tt29852816",
        server1: "",
        server2: "",
        telegramLink: "https://t.me/your_link",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
];


// ============================================================

/** Decode a base64 URL string */
function decodeUrl(b64) {
    try { return atob(b64); } catch (e) { return ""; }
}

/** Get quality badge class */
function getQualityClass(q) {
    const map = { "BLURAY": "bluray", "BLU-RAY": "bluray", "WEB": "web", "CAM": "cam", "HD": "hd" };
    return map[(q || "").toUpperCase()] || "web";
}

/** Sort movies newest first by dateAdded */
function sortByDate(arr) {
    return [...arr].sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
}

// ============================================================
// --- 3. HEADER / SEARCH LOGIC ---
// ============================================================

function toggleSearch() {
    const wrapper = document.getElementById("searchBar");
    if (!wrapper) return;
    wrapper.classList.toggle("active");
    if (wrapper.classList.contains("active")) {
        const inp = document.getElementById("searchInput");
        if (inp) inp.focus();
    } else {
        // Clear and hide suggestions when closing
        const sug = document.getElementById("suggestions");
        if (sug) { sug.style.display = "none"; sug.innerHTML = ""; }
    }
}

function searchMovies() {
    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    if (!input || !suggestions) return;

    const term = input.value.trim().toLowerCase();
    if (term.length < 1) {
        suggestions.style.display = "none";
        return;
    }

    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));

    if (!filtered.length) {
        suggestions.style.display = "block";
        suggestions.innerHTML = `<div class="suggestion-item" style="color:var(--text-muted); cursor:default;">
            <i class="fas fa-film" style="color:var(--accent);"></i> No results found
        </div>`;
        return;
    }

    suggestions.style.display = "block";
    suggestions.innerHTML = filtered.slice(0, 6).map(m => `
        <div class="suggestion-item" onclick="window.location.href='details.html?id=${m.id}'">
            <img src="${m.img}" alt="${m.title}" loading="lazy">
            <div>
                <div style="font-weight:600; font-size:0.82rem;">${m.title}</div>
                <div style="font-size:0.72rem; color:var(--text-muted);">${m.category} &bull; ${m.rating} ★</div>
            </div>
        </div>
    `).join("");
}

// Close suggestions when clicking outside
document.addEventListener("click", function (e) {
    const container = document.querySelector(".search-container");
    const sug = document.getElementById("suggestions");
    if (sug && container && !container.contains(e.target)) {
        sug.style.display = "none";
    }
});

// ============================================================
// --- 4. HOME PAGE RENDER LOGIC ---
// ============================================================

function renderHome() {
    const container = document.getElementById("homeContent");
    if (!container) return;

    // If arriving from a category tag click (details page → index.html?cat=X)
    const urlCat = new URLSearchParams(window.location.search).get("cat");
    if (urlCat) {
        viewAll(urlCat, urlCat);
        return;
    }

    let html = "";

    // Recently Added — latest 20 movies
    const latest = sortByDate(movies).slice(0, 20);
    html += renderSection("Recently Added", "🔥", latest, "All");

    // Category sections — handle comma-separated categories
    const allCats = [...new Set(
        movies.flatMap(m => m.category.split(",").map(c => c.trim()).filter(Boolean))
    )];
    const catIcons = {
        "Action": "⚡", "Sci-Fi": "🚀", "Drama": "🎭", "Comedy": "😄",
        "Horror": "👻", "Romance": "💕", "Thriller": "🔪", "Animation": "🎨",
        "Anal": "🔥", "All Sex": "🎬", "Teens": "💫", "Couples": "💑",
        "Hotwife": "👑", "Russian Porn": "🌹", "Private": "✨", "War": "⚔️",
        "Big Dicks": "💪", "Big Tits": "💎", "Blowjobs": "👄",
        "Cumshots": "💦", "Group Sex": "👥", "Lingerie": "🩱",
        "Oral": "💋", "Small Tits": "🌸", "Threesomes": "🎭",
        "Appearance": "🌟", "International": "🌍", "Secretaries": "💼"
    };

    allCats.forEach(cat => {
        const catMovies = movies.filter(m =>
            m.category.split(",").map(c => c.trim()).includes(cat)
        ).slice(0, 20);
        if (!catMovies.length) return;
        const icon = catIcons[cat] || "🎬";
        html += renderSection(cat, icon, catMovies, cat);
    });

    container.innerHTML = html;
}

function renderSection(title, icon, data, catName) {
    if (!data.length) return "";
    return `
        <div class="section-container fade-in">
            <div class="section-header">
                <h2 class="section-title">${icon ? icon + " " : ""}${title.toUpperCase()}</h2>
                <span class="see-all-link" onclick="viewAll('${catName}', '${title}')">See All →</span>
            </div>
            <div class="movie-grid">
                ${data.map(m => renderCard(m)).join("")}
            </div>
            <button class="view-all-btn" onclick="viewAll('${catName}', '${title}')">
                <i class="fas fa-th-large"></i> VIEW ALL ${title.toUpperCase()}
            </button>
        </div>
    `;
}

function renderCard(m) {
    return `
        <div class="movie-card slide-up" onclick="window.location.href='details.html?id=${m.id}'">
            <div class="card-img-wrapper">
                <span class="quality-badge ${getQualityClass(m.quality)}">${m.quality || "WEB"}</span>
                <span class="rating"><i class="fas fa-star"></i>${m.rating}</span>
                <img src="${m.img}" alt="${m.title}" loading="lazy">
                <div class="card-overlay">
                    <div style="width:100%; text-align:center;">
                        <div class="card-play-icon"><i class="fas fa-play"></i></div>
                    </div>
                </div>
            </div>
            <div class="movie-info">${m.title}</div>
        </div>
    `;
}

function viewAll(cat, title) {
    const container = document.getElementById("homeContent");
    if (!container) return;

    const filtered = cat === "All"
        ? sortByDate(movies)
        : movies.filter(m => m.category.split(",").map(c => c.trim()).includes(cat));

    container.innerHTML = `
        <button class="back-btn" onclick="window.location.reload()">
            <i class="fas fa-arrow-left"></i> Back to Home
        </button>
        <div class="section-container fade-in">
            <div class="section-header">
                <h2 class="section-title">🎬 ${(title || cat).toUpperCase()}</h2>
                <span style="font-size:0.8rem; color:var(--text-muted);">${filtered.length} titles</span>
            </div>
            <div class="movie-grid">
                ${filtered.map(m => renderCard(m)).join("")}
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// --- 5. DETAILS PAGE LOGIC ---
// ============================================================

let adState = 0;
let tgAdClicked = false;
let currentServer = 1;

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");
    const m = movies.find(movie => movie.id === movieId);
    const container = document.getElementById("detailsContainer");
    if (!container) return;

    if (!m) {
        container.innerHTML = `
            <div class="empty-state fade-in" style="padding: 80px 20px;">
                <i class="fas fa-film"></i>
                <p>Movie not found. <a href="index.html" style="color:var(--accent);">Go Home</a></p>
            </div>
        `;
        return;
    }

    // Page title
    document.title = `${m.title} - GlassWave`;

    // ── vidsrc / direct-URL player (when imdbId is set on the movie object) ──
    let vidsrcPlayerHTML = "";
    if (m.imdbId) {
        const subUrl = `${window.location.origin}/Movies/subs/${m.imdbId}.vtt`;
        const subParam = `&sub_url=${encodeURIComponent(subUrl)}`;

        // Append sub_url to each server URL
        function appendSub(url) {
            if (!url) return "";
            // Avoid double-appending
            if (url.includes("sub_url=")) return url;
            const sep = url.includes("?") ? "&" : "?";
            return url + sep + `sub_url=${encodeURIComponent(subUrl)}`;
        }

        const s1Raw = m.server1 || `https://vidsrc-embed.ru/embed/movie?imdb=${m.imdbId}`;
        const s2Raw = m.server2 || "";

        const s1 = appendSub(s1Raw);
        const s2 = s2Raw ? appendSub(s2Raw) : "";

        const s1Esc = s1.replace(/'/g, "\\'");
        const s2Esc = s2.replace(/'/g, "\\'");

        const svrBtns = `
            <div class="server-buttons" id="svrBtns" style="display:none;">
                <button class="server-btn active" id="sv1-btn" onclick="switchDirectServer(1,'${s1Esc}')">
                    <i class="fas fa-server"></i> Server 1
                </button>
                ${s2 ? `<button class="server-btn" id="sv2-btn" onclick="switchDirectServer(2,'${s2Esc}')">
                    <i class="fas fa-server"></i> Server 2
                </button>` : ""}
            </div>
        `;

        vidsrcPlayerHTML = `
            <div class="watch-hint" style="margin-top:28px;">
                <p>Watch Online</p>
                <i class="fas fa-chevron-down animated-arrow"></i>
            </div>

            <!-- ── Tips bar above player ── -->
            <div style="
                display:flex; flex-wrap:wrap; align-items:center; gap:12px;
                margin-bottom:12px; padding:10px 16px;
                border-radius:12px; background:var(--glass);
                border:1px solid var(--glass-border);
                font-size:0.78rem; color:var(--text-muted);
            ">
                <span style="display:flex;align-items:center;gap:6px;">
                    <i class="fas fa-expand" style="color:var(--accent);font-size:0.9rem;"></i>
                    <span>හොඳ experience සඳහා <b style="color:var(--text);">Fullscreen</b> mode ගන්න</span>
                </span>
                <span style="display:flex;align-items:center;gap:6px;">
                    <i class="fas fa-closed-captioning" style="color:var(--accent);font-size:0.9rem;"></i>
                    <span>Subtitle නොපෙනේ නම් player ඇතුළේ <b style="color:var(--text);">CC</b> icon ඔබන්න</span>
                </span>
            </div>

            <div class="modern-player" id="playerArea">
                <div id="fakeUI" class="play-overlay">
                    <div class="play-overlay-bg-img" style="background-image: url('${m.img}');"></div>
                    <button class="glow-play-btn" id="playBtn" onclick="handleVidsrcPlayer('${s1Esc}')">
                        <i class="fas fa-play"></i> PLAY NOW
                    </button>
                    <span class="play-note">Click to load the stream</span>
                </div>
                <div id="realVideo" style="display:none;" class="video-container"></div>
            </div>

            ${svrBtns}

            <div class="ad-banner-block">
                <script async="async" data-cfasync="false" src="https://pl26555333.profitablecpmratenetwork.com/9a020a6df22152fbb6bfa7e2001a7f05/invoke.js"><\/script>
                <div id="container-9a020a6df22152fbb6bfa7e2001a7f05"></div>
            </div>
        `;
    }

    // ── legacy server buttons (only shown when no imdbId) ──
    const serverBtnsHTML = (m.showPlayer && !m.imdbId) ? `
        <div class="server-buttons">
            ${m.server1 ? `<button class="server-btn active" id="sv1-btn" onclick="switchServer(1, '${m.server1}')"><i class="fas fa-server"></i> Server 1</button>` : ""}
            ${m.server2 ? `<button class="server-btn" id="sv2-btn" onclick="switchServer(2, '${m.server2}')"><i class="fas fa-server"></i> Server 2</button>` : ""}
        </div>
    ` : "";

    container.innerHTML = `
        <div class="movie-post-wrapper fade-in">
            <div class="detail-hero-bg" style="background-image: url('${m.img}');"></div>

            <div class="glass-card">
                <div class="detail-top">
                    <div class="poster-container-detail">
                        <img src="${m.img}" alt="${m.title}" loading="lazy">
                    </div>

                    <div class="info-sec">
                        <h1>${m.title}</h1>

                        <div class="cat-tags">
                            ${m.category.split(",").map(c => c.trim()).filter(Boolean).map(c =>
                                `<span class="glass-cat" onclick="window.location.href='index.html?cat=${encodeURIComponent(c)}'">${c}</span>`
                            ).join("")}
                            <span class="glass-cat" style="border-color: #ffd700; color: #ffd700;">${m.quality}</span>
                        </div>

                        <div class="meta-highlight-box">
                            <div class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span><b>${m.duration}</b></span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-star star-icon"></i>
                                <span><b>${m.rating} / 10</b></span>
                            </div>
                        </div>

                        ${m.casting ? `<p class="casting-box"><i class="fas fa-users" style="color:var(--accent); margin-right:6px;"></i><b>Cast:</b> ${m.casting}</p>` : ""}

                        <div class="story-box"><p>${m.description}</p></div>
                    </div>
                </div>

                <div class="player-section">
                    ${m.imdbId ? vidsrcPlayerHTML : m.showPlayer ? `
                        <div class="watch-hint">
                            <p>Watch Online</p>
                            <i class="fas fa-chevron-down animated-arrow"></i>
                        </div>
                        <div class="modern-player" id="playerArea">
                            <div id="fakeUI" class="play-overlay">
                                <div class="play-overlay-bg-img" style="background-image: url('${m.img}');"></div>
                                <button class="glow-play-btn" id="playBtn" onclick="handleFakePlayer('${m.server1}')">
                                    <i class="fas fa-play"></i> PLAY NOW
                                </button>
                                <span class="play-note">Click to load the stream</span>
                            </div>
                            <div id="realVideo" style="display:none;" class="video-container"></div>
                        </div>
                        ${serverBtnsHTML}
                        <div class="ad-banner-block">
                            <script async="async" data-cfasync="false" src="https://pl26555333.profitablecpmratenetwork.com/9a020a6df22152fbb6bfa7e2001a7f05/invoke.js"><\/script>
                            <div id="container-9a020a6df22152fbb6bfa7e2001a7f05"></div>
                        </div>
                    ` : `
                        <div class="empty-state">
                            <i class="fas fa-video-slash"></i>
                            <p>Online streaming not available for this title.</p>
                        </div>
                    `}

                    ${m.showTelegram ? `
                        <div class="tg-section">
                            <p class="tg-label"><i class="fas fa-download"></i> Download Options</p>
                            <button id="tg-btn" class="telegram-btn" onclick="handleTelegram('${m.telegramLink}')">
                                <i class="fab fa-telegram"></i> Download via Telegram
                            </button>
                            <div id="tg-countdown" style="display:none; margin-top:10px; font-size:0.82rem; color:var(--text-muted); text-align:center;">
                                <i class="fas fa-spinner fa-spin"></i> Redirecting in <span id="tg-timer">2</span>s...
                            </div>
                        </div>
                        <div class="ad-banner-block">
                            <script async="async" data-cfasync="false" src="https://pl26555333.profitablecpmratenetwork.com/9a020a6df22152fbb6bfa7e2001a7f05/invoke.js"><\/script>
                            <div id="container-9a020a6df22152fbb6bfa7e2001a7f05-tg"></div>
                        </div>
                    ` : ""}
                </div>
            </div>

            <div class="related-section">
                ${buildRelated(m)}
            </div>
        </div>
    `;
}

function buildRelated(m) {
    const related = movies.filter(x => x.category === m.category && x.id !== m.id).slice(0, 12);
    if (!related.length) return "";
    return `
        <div class="section-container" style="padding-left:0; padding-right:0;">
            <div class="section-header">
                <h2 class="section-title">YOU MIGHT ALSO LIKE</h2>
            </div>
            <div class="movie-grid">
                ${related.map(r => renderCard(r)).join("")}
            </div>
        </div>
    `;
}

// ============================================================
// --- 5b. IMDB / VIDSRC PLAYER (Sinhala Subtitles)
// ============================================================

/**
 * Called from details.html when ?imdb=ttXXXXXXX is present in the URL.
 * Constructs the vidsrc-embed.ru URL with the matching Sinhala subtitle file
 * from /subs/<IMDB_ID>.vtt and renders a clean player inside #detailsContainer.
 */
function loadImdbMovie() {
    const params  = new URLSearchParams(window.location.search);
    const imdbId  = params.get('imdb');          // e.g. "tt1234567"
    const container = document.getElementById('detailsContainer');
    if (!container) return;

    // Guard — must look like a real IMDB id
    if (!imdbId || !/^tt\d+$/i.test(imdbId)) {
        container.innerHTML = `
            <div class="empty-state fade-in" style="padding: 80px 20px;">
                <i class="fas fa-film"></i>
                <p>Invalid IMDB ID. <a href="index.html" style="color:var(--accent);">Go Home</a></p>
            </div>
        `;
        return;
    }

    // Build the subtitle URL — file lives at /subs/<imdbId>.vtt on your domain
    const subUrl    = `${window.location.origin}/subs/${imdbId}.vtt`;

    // Build the vidsrc embed URL
    const playerUrl = `https://vidsrc-embed.ru/embed/movie?imdb=${imdbId}&sub_url=${encodeURIComponent(subUrl)}`;

    // Update the browser tab title
    document.title = `${imdbId} — GlassWave`;

    container.innerHTML = `
        <div class="movie-post-wrapper fade-in">

            <!-- Player section — reuses your existing .player-section styles -->
            <div class="glass-card" style="padding: 24px 20px 32px;">
                <div class="player-section">

                    <div class="watch-hint">
                        <p>Now Playing · Sinhala Subtitles</p>
                        <i class="fas fa-chevron-down animated-arrow"></i>
                    </div>

                    <div class="modern-player" id="playerArea">
                        <div id="realVideo" class="video-container">
                            <!-- id="moviePlayer" targets the iframe for JS access -->
                            <iframe
                                id="moviePlayer"
                                src="${playerUrl}"
                                frameborder="0"
                                allowfullscreen
                                allow="autoplay; fullscreen"
                                referrerpolicy="origin"
                            ></iframe>
                        </div>
                    </div>

                    <!-- Subtitle info badge -->
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-top: 14px;
                        padding: 10px 16px;
                        border-radius: 10px;
                        background: var(--glass);
                        border: 1px solid var(--glass-border);
                        font-size: 0.8rem;
                        color: var(--text-muted);
                        width: fit-content;
                    ">
                        <i class="fas fa-closed-captioning" style="color: var(--accent);"></i>
                        <span>සිංහල උපසිරැසි (Sinhala Subtitles) සක්‍රියයි</span>
                    </div>

                </div>
            </div>

        </div>
    `;
}

// ============================================================
// --- 6. AD & INTERACTION LOGIC ---
// ============================================================

const AD_URL = "https://omg10.com/4/9975772";

/** Fake player — two-click with ad */
function handleFakePlayer(encodedUrl) {
    const playBtn = document.getElementById("playBtn");

    if (adState === 0) {
        // First click: open ad, change button state
        window.open(AD_URL, "_blank");
        adState = 1;
        if (playBtn) {
            playBtn.innerHTML = "<i class='fas fa-server'></i> LOAD SERVERS";
            playBtn.style.background = "linear-gradient(135deg, #ff6b6b, #ff8e53)";
        }
        const note = document.querySelector(".play-note");
        if (note) note.textContent = "Ad opened. Click again to load the player.";

    } else if (adState === 1) {
        // Second click: open ad again then load iframe
        window.open(AD_URL, "_blank");
        adState = 2;

        const decoded = decodeUrl(encodedUrl);
        if (!decoded) return;

        const fakeUI = document.getElementById("fakeUI");
        const realVideo = document.getElementById("realVideo");
        if (fakeUI) fakeUI.style.display = "none";
        if (realVideo) {
            realVideo.style.display = "block";
            realVideo.innerHTML = `<iframe src="${decoded}" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>`;
        }
    }
}

/** vidsrc / direct-URL player — 2-ad gate, then loads iframe + reveals server buttons */
function handleVidsrcPlayer(playerUrl) {
    const playBtn = document.getElementById("playBtn");

    if (adState === 0) {
        // Click 1 → open first ad
        window.open(AD_URL, "_blank");
        adState = 1;
        if (playBtn) {
            playBtn.innerHTML = "<i class='fas fa-server'></i> LOAD PLAYER";
            playBtn.style.background = "linear-gradient(135deg, #ff6b6b, #ff8e53)";
        }
        const note = document.querySelector(".play-note");
        if (note) note.textContent = "Ad opened. Click again to load the player.";

    } else if (adState === 1) {
        // Click 2 → open second ad, load iframe, show server buttons
        window.open(AD_URL, "_blank");
        adState = 2;

        const fakeUI    = document.getElementById("fakeUI");
        const realVideo = document.getElementById("realVideo");
        const svrBtns   = document.getElementById("svrBtns");

        if (fakeUI)    fakeUI.style.display    = "none";
        if (svrBtns)   svrBtns.style.display   = "flex";
        if (realVideo) {
            realVideo.style.display = "block";
            realVideo.innerHTML = `
                <iframe
                    id="moviePlayer"
                    src="${playerUrl}"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; fullscreen"
                    referrerpolicy="origin"
                ></iframe>
            `;
        }
    }
}

/** Switch between direct-URL servers (no base64 decode needed) */
function switchDirectServer(num, url) {
    // If ads not done yet, just trigger the flow with this url
    if (adState < 2) {
        handleVidsrcPlayer(url);
        return;
    }

    const realVideo = document.getElementById("realVideo");
    if (realVideo) {
        realVideo.style.display = "block";
        realVideo.innerHTML = `
            <iframe
                id="moviePlayer"
                src="${url}"
                frameborder="0"
                allowfullscreen
                allow="autoplay; fullscreen"
                referrerpolicy="origin"
            ></iframe>
        `;
    }

    // Update active button state
    document.querySelectorAll(".server-btn").forEach(btn => btn.classList.remove("active"));
    const active = document.getElementById("sv" + num + "-btn");
    if (active) active.classList.add("active");
}


function switchServer(num, encodedUrl) {
    if (adState < 2) {
        // Force load with chosen server
        handleFakePlayer(encodedUrl);
        return;
    }

    const decoded = decodeUrl(encodedUrl);
    if (!decoded) return;

    const realVideo = document.getElementById("realVideo");
    if (realVideo) {
        realVideo.style.display = "block";
        realVideo.innerHTML = `<iframe src="${decoded}" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>`;
    }

    // Update active button style
    document.querySelectorAll(".server-btn").forEach(btn => btn.classList.remove("active"));
    const active = document.getElementById("sv" + num + "-btn");
    if (active) active.classList.add("active");
}

/** Telegram button — opens 2 ads in new tabs, then auto-redirects after 2s */
function handleTelegram(link) {
    const btn       = document.getElementById("tg-btn");
    const countdown = document.getElementById("tg-countdown");
    const timerEl   = document.getElementById("tg-timer");

    if (!tgAdClicked) {
        // Step 1: open first ad
        window.open(AD_URL, "_blank");
        tgAdClicked = true;

        if (btn) {
            btn.classList.add("clicked");
            btn.innerHTML = "<i class='fas fa-check-circle'></i> PROCESSING — CLICK AGAIN";
        }
    } else {
        // Step 2: open second ad, then auto-redirect after 2s
        window.open(AD_URL, "_blank");

        if (btn) {
            btn.disabled = true;
            btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Opening Telegram...";
            btn.style.opacity = "0.7";
        }

        if (countdown) countdown.style.display = "block";

        let secs = 2;
        if (timerEl) timerEl.textContent = secs;

        const iv = setInterval(() => {
            secs--;
            if (timerEl) timerEl.textContent = secs;
            if (secs <= 0) {
                clearInterval(iv);
                window.location.href = link;
            }
        }, 1000);
    }
}
