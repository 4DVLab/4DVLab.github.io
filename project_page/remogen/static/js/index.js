// ===== ReMoGen project page custom logic =====

function initializeBaseUI() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });
    }

    const moreWorksContainer = document.querySelector('.more-works-container');
    if (moreWorksContainer) {
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('moreWorksDropdown');
            const button = document.querySelector('.more-works-btn');
            if (dropdown && button && !moreWorksContainer.contains(event.target)) {
                dropdown.classList.remove('show');
                button.classList.remove('active');
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const dropdown = document.getElementById('moreWorksDropdown');
                const button = document.querySelector('.more-works-btn');
                if (dropdown && button) {
                    dropdown.classList.remove('show');
                    button.classList.remove('active');
                }
            }
        });
    }
}

function setupVideoFrame(frame, item) {
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder';
    placeholder.innerHTML = `${item.label}<small>${item.placeholder || item.video || ''}</small>`;
    frame.appendChild(placeholder);

    if (item.video) {
        const video = document.createElement('video');
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = 'auto';
        const source = document.createElement('source');
        source.src = item.video;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.addEventListener('loadeddata', () => frame.classList.add('has-video'));
        frame.appendChild(video);
    } else if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.label;
        img.addEventListener('load', () => frame.classList.add('has-image'));
        frame.appendChild(img);
    } else if (item.embed) {
        const iframe = document.createElement('iframe');
        iframe.src = item.embed;
        iframe.title = item.label;
        iframe.loading = 'lazy';
        iframe.allowFullscreen = true;
        iframe.addEventListener('load', () => frame.classList.add('has-embed'));
        frame.appendChild(iframe);
    }
}

function buildVideoCard(item) {
    const card = document.createElement('div');
    card.className = 'video-card';

    const frame = document.createElement('div');
    frame.className = 'video-frame';
    setupVideoFrame(frame, item);

    const label = document.createElement('div');
    label.className = 'video-label';
    label.innerHTML = `<strong>${item.label}</strong>`;

    card.appendChild(frame);
    card.appendChild(label);
    return card;
}

function syncVideosInRoot(root, activeContainer) {
    if (!root) return;
    root.querySelectorAll('video').forEach(video => {
        if (activeContainer && activeContainer.contains(video)) {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {});
            }
        } else {
            video.pause();
        }
    });
}

const comparisonData = {
    hhi: {
        tabs: [
            {
                title: 'Embrace',
                prompt: '"opens arms to embrace another person"',
                meta: 'Textual Intent',
                gridClass: '',
                items: [
                    { label: 'ReGenNet', video: 'static/videos/hhi/embrace/regennet.mp4', placeholder: 'static/videos/hhi/embrace/regennet.mp4' },
                    { label: 'FreeMotion', video: 'static/videos/hhi/embrace/freemotion.mp4', placeholder: 'static/videos/hhi/embrace/freemotion.mp4' },
                    { label: 'FreeMotion (offline)', video: 'static/videos/hhi/embrace/freemotion_offline.mp4', placeholder: 'static/videos/hhi/embrace/freemotion_offline.mp4' },
                    { label: 'SymBridge', video: 'static/videos/hhi/embrace/symbridge.mp4', placeholder: 'static/videos/hhi/embrace/symbridge.mp4' },
                    { label: 'ReMoGen (Ours)', video: 'static/videos/hhi/embrace/remogen.mp4', placeholder: 'static/videos/hhi/embrace/remogen.mp4' },
                    { label: 'GT', video: 'static/videos/hhi/embrace/gt.mp4', placeholder: 'static/videos/hhi/embrace/gt.mp4' }
                ]
            },
            {
                title: 'Support Arm',
                prompt: '"supports the left arm with both hands"',
                meta: 'Textual Intent',
                gridClass: '',
                items: [
                    { label: 'ReGenNet', video: 'static/videos/hhi/support_arm/regennet.mp4', placeholder: 'static/videos/hhi/support_arm/regennet.mp4' },
                    { label: 'FreeMotion', video: 'static/videos/hhi/support_arm/freemotion.mp4', placeholder: 'static/videos/hhi/support_arm/freemotion.mp4' },
                    { label: 'FreeMotion (offline)', video: 'static/videos/hhi/support_arm/freemotion_offline.mp4', placeholder: 'static/videos/hhi/support_arm/freemotion_offline.mp4' },
                    { label: 'SymBridge', video: 'static/videos/hhi/support_arm/symbridge.mp4', placeholder: 'static/videos/hhi/support_arm/symbridge.mp4' },
                    { label: 'ReMoGen (Ours)', video: 'static/videos/hhi/support_arm/remogen.mp4', placeholder: 'static/videos/hhi/support_arm/remogen.mp4' },
                    { label: 'GT', video: 'static/videos/hhi/support_arm/gt.mp4', placeholder: 'static/videos/hhi/support_arm/gt.mp4' }
                ]
            },
            {
                title: 'Pat Head',
                prompt: '"pats on the head with both hands"',
                meta: 'Textual Intent',
                gridClass: '',
                items: [
                    { label: 'ReGenNet', video: 'static/videos/hhi/pat_head/regennet.mp4', placeholder: 'static/videos/hhi/pat_head/regennet.mp4' },
                    { label: 'FreeMotion', video: 'static/videos/hhi/pat_head/freemotion.mp4', placeholder: 'static/videos/hhi/pat_head/freemotion.mp4' },
                    { label: 'FreeMotion (offline)', video: 'static/videos/hhi/pat_head/freemotion_offline.mp4', placeholder: 'static/videos/hhi/pat_head/freemotion_offline.mp4' },
                    { label: 'SymBridge', video: 'static/videos/hhi/pat_head/symbridge.mp4', placeholder: 'static/videos/hhi/pat_head/symbridge.mp4' },
                    { label: 'ReMoGen (Ours)', video: 'static/videos/hhi/pat_head/remogen.mp4', placeholder: 'static/videos/hhi/pat_head/remogen.mp4' },
                    { label: 'GT', video: 'static/videos/hhi/pat_head/gt.mp4', placeholder: 'static/videos/hhi/pat_head/gt.mp4' }
                ]
            }
        ]
    },
    hsi: {
        tabs: [
            {
                title: 'Stand Up',
                prompt: '"stand up from seat"',
                meta: 'Textual Intent',
                gridClass: 'grid-4',
                items: [
                    { label: 'TRUMANS', video: 'static/videos/hsi/stand_up/trumans.mp4', placeholder: 'static/videos/hsi/stand_up/trumans.mp4' },
                    { label: 'LINGO', video: 'static/videos/hsi/stand_up/lingo.mp4', placeholder: 'static/videos/hsi/stand_up/lingo.mp4' },
                    { label: 'ReMoGen (Ours)', video: 'static/videos/hsi/stand_up/remogen.mp4', placeholder: 'static/videos/hsi/stand_up/remogen.mp4' },
                    { label: 'GT', video: 'static/videos/hsi/stand_up/gt.mp4', placeholder: 'static/videos/hsi/stand_up/gt.mp4' }
                ]
            },
            {
                title: 'Walk Back Left',
                prompt: '"walk back left while holding small_plant in right hand"',
                meta: 'Textual Intent',
                gridClass: 'grid-4',
                items: [
                    { label: 'TRUMANS', video: 'static/videos/hsi/walk_back_left/trumans.mp4', placeholder: 'static/videos/hsi/walk_back_left/trumans.mp4' },
                    { label: 'LINGO', video: 'static/videos/hsi/walk_back_left/lingo.mp4', placeholder: 'static/videos/hsi/walk_back_left/lingo.mp4' },
                    { label: 'ReMoGen (Ours)', video: 'static/videos/hsi/walk_back_left/remogen.mp4', placeholder: 'static/videos/hsi/walk_back_left/remogen.mp4' },
                    { label: 'GT', video: 'static/videos/hsi/walk_back_left/gt.mp4', placeholder: 'static/videos/hsi/walk_back_left/gt.mp4' }
                ]
            },
            {
                title: 'Walk Forward',
                prompt: '"walk forward"',
                meta: 'Textual Intent',
                gridClass: 'grid-4',
                items: [
                    { label: 'TRUMANS', video: 'static/videos/hsi/walk_forward/trumans.mp4', placeholder: 'static/videos/hsi/walk_forward/trumans.mp4' },
                    { label: 'LINGO', video: 'static/videos/hsi/walk_forward/lingo.mp4', placeholder: 'static/videos/hsi/walk_forward/lingo.mp4' },
                    { label: 'ReMoGen (Ours)', video: 'static/videos/hsi/walk_forward/remogen.mp4', placeholder: 'static/videos/hsi/walk_forward/remogen.mp4' },
                    { label: 'GT', video: 'static/videos/hsi/walk_forward/gt.mp4', placeholder: 'static/videos/hsi/walk_forward/gt.mp4' }
                ]
            }
        ]
    },
    prior: {
        tabs: [
            {
                title: 'Walk Behind',
                prompt: '"walks behind the other person and strikes a pose"',
                meta: 'Universal Prior',
                gridClass: 'grid-4',
                items: [
                    { label: 'Prior Only', video: 'static/videos/prior/walk_behind/prior_only.mp4', placeholder: 'static/videos/prior/walk_behind/prior_only.mp4' },
                    { label: 'Scratch (No Prior)', video: 'static/videos/prior/walk_behind/scratch.mp4', placeholder: 'static/videos/prior/walk_behind/scratch.mp4' },
                    { label: 'Joint-Finetune', video: 'static/videos/prior/walk_behind/joint_finetune.mp4', placeholder: 'static/videos/prior/walk_behind/joint_finetune.mp4' },
                    { label: 'Ours', video: 'static/videos/prior/walk_behind/ours.mp4', placeholder: 'static/videos/prior/walk_behind/ours.mp4' }
                ]
            },
            {
                title: 'Be Pulled',
                prompt: '"be pulled forward several steps"',
                meta: 'Universal Prior',
                gridClass: 'grid-4',
                items: [
                    { label: 'Prior Only', video: 'static/videos/prior/be_pulled/prior_only.mp4', placeholder: 'static/videos/prior/be_pulled/prior_only.mp4' },
                    { label: 'Scratch (No Prior)', video: 'static/videos/prior/be_pulled/scratch.mp4', placeholder: 'static/videos/prior/be_pulled/scratch.mp4' },
                    { label: 'Joint-Finetune', video: 'static/videos/prior/be_pulled/joint_finetune.mp4', placeholder: 'static/videos/prior/be_pulled/joint_finetune.mp4' },
                    { label: 'Ours', video: 'static/videos/prior/be_pulled/ours.mp4', placeholder: 'static/videos/prior/be_pulled/ours.mp4' }
                ]
            }
        ]
    },
    fwsr: {
        tabs: [
            {
                title: 'Run Pass By',
                prompt: '"runs towards someone and passes by them"',
                meta: 'Before FWSR vs After FWSR',
                gridClass: 'grid-2',
                items: [
                    { label: 'Before FWSR', video: 'static/videos/fwsr/run_pass_by/before_fwsr.mp4', placeholder: 'static/videos/fwsr/run_pass_by/before_fwsr.mp4' },
                    { label: 'After FWSR', video: 'static/videos/fwsr/run_pass_by/after_fwsr.mp4', placeholder: 'static/videos/fwsr/run_pass_by/after_fwsr.mp4' }
                ]
            },
            {
                title: 'Help Up',
                prompt: '"grabs the left arm, and helps in standing up"',
                meta: 'Before FWSR vs After FWSR',
                gridClass: 'grid-2',
                items: [
                    { label: 'Before FWSR', video: 'static/videos/fwsr/help_up/before_fwsr.mp4', placeholder: 'static/videos/fwsr/help_up/before_fwsr.mp4' },
                    { label: 'After FWSR', video: 'static/videos/fwsr/help_up/after_fwsr.mp4', placeholder: 'static/videos/fwsr/help_up/after_fwsr.mp4' }
                ]
            }
        ]
    }
};

const mixedCarouselData = [
    { theme: 'Learning Taichi', title: 'Human-Human-Scene Interaction Results', meta: 'Action Theme', media: { label: 'Learning Taichi', video: 'static/videos/hhsi/learning_taichi.mp4', placeholder: 'static/videos/hhsi/learning_taichi.mp4' } },
    { theme: 'Stretching', title: 'Human-Human-Scene Interaction Results', meta: 'Action Theme', media: { label: 'Stretching', video: 'static/videos/hhsi/stretching.mp4', placeholder: 'static/videos/hhsi/stretching.mp4' } },    
    { theme: 'Discussing', title: 'Human-Human-Scene Interaction Results', meta: 'Action Theme', media: { label: 'Discussing', video: 'static/videos/hhsi/discussing.mp4', placeholder: 'static/videos/hhsi/discussing.mp4' } },
    { theme: 'Teaching', title: 'Human-Human-Scene Interaction Results', meta: 'Action Theme', media: { label: 'Teaching', video: 'static/videos/hhsi/teaching.mp4', placeholder: 'static/videos/hhsi/teaching.mp4' } }
];

function renderCompareBlock(root, config) {
    if (!root || !config) return;
    const tabBar = root.querySelector('[data-tab-bar]');
    const gridPlaceholder = root.querySelector('[data-grid]');
    const prompt = root.querySelector('[data-prompt]');
    const meta = root.querySelector('[data-meta]');
    if (!tabBar || !gridPlaceholder || !prompt) return;

    tabBar.innerHTML = '';

    const panelWrap = document.createElement('div');
    panelWrap.className = 'compare-panels';
    gridPlaceholder.replaceWith(panelWrap);

    const panels = [];

    config.tabs.forEach((tab, index) => {
        const btn = document.createElement('button');
        btn.className = `compare-tab${index === 0 ? ' is-active' : ''}`;
        btn.type = 'button';
        btn.textContent = tab.title;
        tabBar.appendChild(btn);

        const panel = document.createElement('div');
        panel.className = 'compare-panel';
        panel.style.display = index === 0 ? '' : 'none';

        const grid = document.createElement('div');
        grid.className = `video-grid ${tab.gridClass || ''}`.trim();
        tab.items.forEach(item => grid.appendChild(buildVideoCard(item)));
        panel.appendChild(grid);
        panelWrap.appendChild(panel);
        panels.push(panel);

        btn.addEventListener('click', () => {
            panels.forEach((currentPanel, panelIndex) => {
                currentPanel.style.display = panelIndex === index ? '' : 'none';
            });
            Array.from(tabBar.querySelectorAll('.compare-tab')).forEach((tabButton, btnIndex) => {
                tabButton.classList.toggle('is-active', btnIndex === index);
            });
            prompt.textContent = tab.prompt;
            if (meta) meta.textContent = tab.meta || '';
            syncVideosInRoot(root, panels[index]);
        });
    });

    prompt.textContent = config.tabs[0].prompt;
    if (meta) meta.textContent = config.tabs[0].meta || '';
    syncVideosInRoot(root, panels[0]);
}

function renderMixedCarousel(root, slides) {
    if (!root || !slides || !slides.length) return;
    const stage = root.querySelector('[data-stage]');
    const dotsWrap = root.querySelector('[data-dots]');
    const themeText = root.querySelector('[data-theme-text]');
    const themeMeta = root.querySelector('[data-theme-meta]');
    if (!stage || !dotsWrap || !themeText || !themeMeta) return;

    stage.innerHTML = '';
    dotsWrap.innerHTML = '';

    const slidePanels = slides.map((slide, idx) => {
        const panel = document.createElement('div');
        panel.className = 'mixed-carousel-panel';
        panel.style.display = idx === 0 ? '' : 'none';

        const media = document.createElement('div');
        media.className = 'mixed-carousel-media';
        setupVideoFrame(media, slide.media);
        panel.appendChild(media);
        stage.appendChild(panel);
        return panel;
    });

    let active = 0;

    function renderSlide(idx) {
        active = (idx + slides.length) % slides.length;
        slidePanels.forEach((panel, panelIndex) => {
            panel.style.display = panelIndex === active ? '' : 'none';
        });

        const current = slides[active];
        themeText.textContent = current.theme;
        themeMeta.textContent = current.meta;

        Array.from(dotsWrap.querySelectorAll('.carousel-dot')).forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === active);
        });

        syncVideosInRoot(root, slidePanels[active]);
    }

    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot${idx === 0 ? ' is-active' : ''}`;
        dot.type = 'button';
        dot.setAttribute('aria-label', `Slide ${idx + 1}`);
        dot.addEventListener('click', () => renderSlide(idx));
        dotsWrap.appendChild(dot);
    });

    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', () => renderSlide(active - 1));
    if (next) next.addEventListener('click', () => renderSlide(active + 1));

    renderSlide(0);
}

function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video, .video-frame video, .mixed-carousel-media video');
    if (!carouselVideos.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            const isVisible = entry.isIntersecting && video.offsetParent !== null;
            if (isVisible) {
                const playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {});
                }
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.35 });

    carouselVideos.forEach(video => observer.observe(video));
}

// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    if (!bibtexElement || !button) return;

    const copyText = button.querySelector('.copy-text');

    const applyCopiedState = () => {
        button.classList.add('copied');
        if (copyText) copyText.textContent = 'Copied';
        setTimeout(function() {
            button.classList.remove('copied');
            if (copyText) copyText.textContent = 'Copy';
        }, 2000);
    };

    navigator.clipboard.writeText(bibtexElement.textContent).then(function() {
        applyCopiedState();
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = bibtexElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        applyCopiedState();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeBaseUI();

    if (window.bulmaCarousel) {
        bulmaCarousel.attach('.carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
            loop: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    if (window.bulmaSlider && typeof bulmaSlider.attach === 'function') {
        bulmaSlider.attach();
    }

    document.querySelectorAll('[data-compare]').forEach(root => {
        const key = root.getAttribute('data-compare');
        renderCompareBlock(root, comparisonData[key]);
    });

    document.querySelectorAll('[data-mixed-carousel]').forEach(root => {
        renderMixedCarousel(root, mixedCarouselData);
    });

    setupVideoCarouselAutoplay();
});
