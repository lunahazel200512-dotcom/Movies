// ============================================================
// GlassWave — script.js  (Clean, error-free, production build)
// ============================================================

// --- 1. MOVIES DATABASE ---
const movies = [
    {
        id: "the-little-mermaid",
        title: "The Little Mermaid | සිංහල හඩකැවූ",
        rating: "5.0",
        quality: "HD",
        img: "https://media.themoviedb.org/t/p/w600_and_h900_face/qEM80vqREgfjk7YhIbl4AgfZ47S.jpg",
        category: "Sinhala Dubbed",
        duration: "1h 25m",
        casting: "William Moseley, Poppy Drayton, Shanna Collins",
        description: "A young reporter and his niece discover a beautiful and enchanting creature they believe to be the real little mermaid.",
        imdbId: "tt5493944",
        server1: "https://drive.google.com/file/d/1AFBU0KfAJEHrPm4IE8Z9SzBkUqVLlMRp/preview",
        server2: "https://drive.google.com/file/d/1AFBU0KfAJEHrPm4IE8Z9SzBkUqVLlMRp/preview",
        telegramLink: "",
        showPlayer: true,
        showTelegram: false,
        dateAdded: "2026-04-26"
    },
    
    {
        id: "scooby-oo",
        title: "Scooby Doo 1 | සිංහල හඩකැවූ",
        rating: "5.4",
        quality: "HD",
        img: "https://media.themoviedb.org/t/p/w600_and_h900_face/mTAiBJGg8mqEfnYHHbi37ZoRSZm.jpg",
        category: "Sinhala Dubbed",
        duration: "1h 25m",
        casting: "N/N",
        description: "After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on.",
        imdbId: "tt18526902",
        server1: "https://luluvdo.com/e/mwg5e8y23zf8",
        server2: "https://luluvdo.com/e/mwg5e8y23zf8",
        telegramLink: "https://t.me/SHFMovieBot?start=qN3q46z4",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2026-04-26"
    },
    
    {
        id: "youth-2026",
        title: "Youth (2026)",
        rating: "7.1",
        quality: "FHD",
        img: "https://myimg.click/images/2026/04/16/Youth-2026.jpg",
        category: "Tamil",
        duration: "02:20:00",
        casting: "Ken Karunas, Anishma Anilkumar, Suraj Venjaramoodu",
        description: "මචං, උඹට මතකද උඹේ 15 අවුරුදු කාලේ? අන්න ඒ වගේ හරිම නිදහස්, පොඩ්ඩක් චන්ඩි පාට් එකෙන් ඉස්කෝලේ ඉන්න ජනප්‍රිය කොල්ලෙක් තමයි අපේ ප්‍රවීන්. ප්‍රවීන්ගේ ලෝකේ තියෙන්නේ යාළුවෝ, විනෝදය සහ එයාගේ හිත ගිය කෙල්ලෝ විතරයි. හැබැයි ගෙදරින් ලැබෙන පීඩනයයි, අම්මා තාත්තා එයා ගැන තියන් ඉන්න ලොකු බලාපොරොත්තුයි එක්ක මේ හැමදේම පටලවගන්න ප්‍රවීන්ට වැඩි කාලයක් යන්නේ නැහැ.තමන්ගේ ජීවිතේ හරි මඟ හොයාගන්න යන මේ 15 හැවිරිදි කොල්ලාගේ Youth එක කොහොම ගෙවෙයිද? ඒක දැනගන්න නම් අනිවාර්යයෙන්ම මේ ෆිල්ම් එක බලන්නම වෙනවා!",
        imdbId: "tt38693888",
        server1: "https://vidsrc.xyz/embed/movie/tt38693888",
        server2: "https://vsembed.ru/embed/movie?imdb=tt38693888",
        telegramLink: "https://telegra.ph/Youth---2026-04-26",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2026-04-26"
    },
    
    {
        id: "white-snake",
        title: "White Snake: Afloat",
        rating: "6.9",
        quality: "FHD",
        img: "https://i.ibb.co/ymSX1CRp/whitesnakeafloat-0.jpg",
        category: "Animation",
        duration: "2h 13m",
        casting: "N/N",
        description: "White Snake කියන්නේ චීන ජනප්‍රවාදයක් ඇසුරින් නිර්මාණය වුණු හරිම ලස්සන ඇනිමේෂන් ෆිල්ම් එකක්. කතාව පටන් ගන්නේ මතකය නැති වුණු බ්ලැන්කා කියන නාග දේවතාවියව ෂුවාන් කියන සාමාන්‍ය මිනිස් කොල්ලා බේරගන්න තැනින්. ටිකෙන් ටික දෙන්නා අතරේ ලොකු බැඳීමක් ඇති වුණත් තමන්ගේ ඇත්ත අනන්‍යතාවය එළිවීමත් එක්ක මේ ආදරේට ලොකු බාධාවක් එනවා. මිනිස් ලෝකයයි බලවත් නාග රාජධානියයි දෙකම එකිනෙක ගැටෙන මේ ගමනේදී තමන්ගේ ආදරේ වෙනුවෙන් මේ දෙන්නාට මොන වගේ අභියෝගවලට මුහුණ දෙන්න වෙයිද? කුතුහලය ආදරය සහ සුපිරි ඇනිමේෂන් දර්ශන පිරිච්ච මේ ෆිල්ම් එක අනිවාර්යයෙන්ම බලන්න ඕනේ එකක්",
        imdbId: "tt30836045",
        server1: "https://vidsrc.xyz/embed/movie/tt30836045",
        server2: "https://vsembed.ru/embed/movie?imdb=tt30836045",
        telegramLink: "https://t.me/SHFMovieBot?start=FveuGxSu",
        showPlayer: true,
        showTelegram: true,
        dateAdded: "2026-04-26"
    },
   {
        id: "dolphin-boy",
        title: "Dolphin Boy | සිංහල හඩකැවූ",
        rating: "5.1",
        quality: "FHD",
        img: "https://image.tmdb.org/t/p/w1280/gISoDEiaUH9BNEunmLC7FgUVaia.jpg",
        category: "Sinhala Dubbed",
        duration: "1h 25m",
        casting: "N/N",
        description: "Dolphin Snowball rescues a little boy in the waves. Since then, they carelessly grow up together, exciting the marine life with their funny tricks. But one day, the peace of their joyful little world is destroyed by the evil Octopus.",
        imdbId: "tt18526902",
        server1: "https://vidsrc.xyz/embed/movie/tt18526902",
        server2: "https://vsembed.ru/embed/movie?imdb=tt18526902",
        telegramLink: "https://t.me/SHFMovieBot?start=FveuGxSu",
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

                    ${(m.showTelegram || m.showTelegram1080 || m.showTelegram720 || m.showSubtitle) ? `
                        <div class="tg-section">
                            <p class="tg-label"><i class="fas fa-download"></i> Download Options</p>

                            <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center;">

                                ${/* ── 1080P button ── */ ""}
                                ${m.showTelegram1080 ? `
                                    <button id="tg-btn-1080" class="telegram-btn tg-animated tg-1080"
                                        onclick="handleTelegramBtn('tg-btn-1080','tg-countdown-1080','${(m.telegramLink1080||m.telegramLink).replace(/'/g,"\\'")}')">
                                        <i class="fab fa-telegram"></i> Download 1080P
                                    </button>
                                ` : (m.showTelegram720 ? "" : m.showTelegram ? `
                                    <button id="tg-btn" class="telegram-btn tg-animated tg-1080"
                                        onclick="handleTelegramBtn('tg-btn','tg-countdown','${(m.telegramLink||"").replace(/'/g,"\\'")}')">
                                        <i class="fab fa-telegram"></i> Download via Telegram
                                    </button>
                                ` : "")}

                                ${/* ── 720P button ── */ ""}
                                ${m.showTelegram720 ? `
                                    <button id="tg-btn-720" class="telegram-btn tg-animated tg-720"
                                        onclick="handleTelegramBtn('tg-btn-720','tg-countdown-720','${(m.telegramLink720||m.telegramLink).replace(/'/g,"\\'")}')">
                                        <i class="fab fa-telegram"></i> Download 720P
                                    </button>
                                ` : ""}

                                ${/* ── Sinhala subtitle button ── */ ""}
                                ${m.showSubtitle ? `
                                    <a id="sub-btn" class="telegram-btn tg-animated tg-sub"
                                        href="${(m.subtitleLink||"#").replace(/'/g,"\\'")}"
                                        target="_blank" rel="noopener"
                                        style="text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
                                        <i class="fas fa-closed-captioning"></i> සිංහල උපසිරැසි
                                    </a>
                                ` : ""}

                            </div>

                            ${/* ── Countdown slots ── */ ""}
                            ${m.showTelegram1080 ? `
                                <div id="tg-countdown-1080" style="display:none; margin-top:8px; font-size:0.82rem; color:var(--text-muted);">
                                    <i class="fas fa-spinner fa-spin"></i> Redirecting in <span id="tg-timer-1080">2</span>s...
                                </div>
                            ` : (m.showTelegram ? `
                                <div id="tg-countdown" style="display:none; margin-top:8px; font-size:0.82rem; color:var(--text-muted);">
                                    <i class="fas fa-spinner fa-spin"></i> Redirecting in <span id="tg-timer">2</span>s...
                                </div>
                            ` : "")}
                            ${m.showTelegram720 ? `
                                <div id="tg-countdown-720" style="display:none; margin-top:8px; font-size:0.82rem; color:var(--text-muted);">
                                    <i class="fas fa-spinner fa-spin"></i> Redirecting in <span id="tg-timer-720">2</span>s...
                                </div>
                            ` : ""}

                            ${/* ── App tip highlight bar ── */ ""}
                            <div style="
                                display:flex; align-items:flex-start; gap:12px;
                                margin-top:18px; padding:14px 16px;
                                border-radius:12px;
                                background: linear-gradient(135deg, rgba(99,102,241,0.13), rgba(168,85,247,0.10));
                                border: 1px solid rgba(168,85,247,0.35);
                                font-size:0.8rem; color:var(--text-muted);
                                line-height:1.6;
                            ">
                                <i class="fas fa-mobile-alt" style="color:#a855f7; font-size:1.3rem; margin-top:2px; flex-shrink:0;"></i>
                                <div>
                                    <b style="color:var(--text); font-size:0.85rem;">හොඳ නැරඹීමේ අත්දැකීම සඳහා</b><br>
                                    <span>Download කළ ෆිල්ම් එක නැරඹීමට
                                    <b style="color:#a855f7;">MX Player</b> හෝ
                                    <b style="color:#a855f7;">VLC</b> app භාවිතා කරන්න.<br>
                                    <span style="opacity:0.75;">
                                        <i class="fab fa-google-play" style="color:#34d399;"></i> Play Store &nbsp;|&nbsp;
                                        <i class="fab fa-apple" style="color:#94a3b8;"></i> App Store
                                    </span></span>
                                </div>
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

/** Universal Telegram button handler — per-button double-ad gate + 2s auto-redirect */
const tgAdStates = {};   // tracks ad-click count per button id

function handleTelegramBtn(btnId, countdownId, link) {
    if (!tgAdStates[btnId]) tgAdStates[btnId] = 0;
    const btn       = document.getElementById(btnId);
    const countdown = document.getElementById(countdownId);
    const timerId   = countdownId + "-val";   // reuse inner span via countdownId

    if (tgAdStates[btnId] === 0) {
        // Click 1 → first ad
        window.open(AD_URL, "_blank");
        tgAdStates[btnId] = 1;
        if (btn) {
            btn.classList.add("clicked");
            const icon = btn.querySelector("i");
            if (icon) icon.className = "fas fa-check-circle";
            btn.childNodes[btn.childNodes.length - 1].textContent = " ඉදිරියට ගොස් නැවත ඔබන්න";
        }

    } else if (tgAdStates[btnId] === 1) {
        // Click 2 → second ad, then countdown redirect
        window.open(AD_URL, "_blank");
        tgAdStates[btnId] = 2;

        if (btn) {
            btn.disabled = true;
            btn.style.opacity = "0.65";
            const icon = btn.querySelector("i");
            if (icon) icon.className = "fas fa-spinner fa-spin";
            btn.childNodes[btn.childNodes.length - 1].textContent = " Opening...";
        }

        if (countdown) {
            countdown.style.display = "block";
            // find the timer span — the last span inside countdown
            const timerEl = countdown.querySelector("span");
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
        } else {
            // no countdown element — redirect after 2s
            setTimeout(() => { window.location.href = link; }, 2000);
        }
    }
}

/** Legacy single Telegram button (showTelegram:true without 1080/720) */
function handleTelegram(link) {
    handleTelegramBtn("tg-btn", "tg-countdown", link);
}
