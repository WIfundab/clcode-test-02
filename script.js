// ドン・キホーテ風の派手なJavaScript効果

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeEffects();
    createFloatingEmojis();
    addRandomColorChanges();
    initializeShrimpEffects();
    initializeCosmicEffects();
    createGalaxyParticles();
    addCosmicSoundEffects();
});

// フラッシュメッセージを表示する関数
function flashMessage() {
    const flashMsg = document.getElementById('flash-message');
    flashMsg.classList.add('show');
    
    // ランダムな効果音テキストを追加
    const sounds = ['🎉 BOING!', '💥 POW!', '✨ BLING!', '🎊 TADA!', '🚀 ZOOM!'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    
    // 一時的にテキストを変更
    const originalText = flashMsg.textContent;
    flashMsg.textContent = randomSound;
    
    setTimeout(() => {
        flashMsg.textContent = originalText;
    }, 500);
    
    // 2秒後に非表示
    setTimeout(() => {
        flashMsg.classList.remove('show');
    }, 2000);
    
    // ページ全体を一瞬振動させる
    document.body.style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// 初期化関数
function initializeEffects() {
    // ランダムな位置に星を追加
    createStars();
    
    // フィーチャーカードにホバー効果を追加
    addCardHoverEffects();
    
    // 価格タグにランダムな効果を追加
    addPriceEffects();
}

// 宇宙を浮遊する絵文字を作成
function createFloatingEmojis() {
    const cosmicEmojis = [
        '⭐', '🌟', '✨', '💫', '🎊', '🎉', '🚀', '💥', '🦐', '🦐', '🦐',
        '🌌', '🛸', '🌠', '☄️', '🌙', '🪐', '🌕', '🌖', '🌗', '🌘', '🌑',
        '🌒', '🌓', '🌔', '👽', '🛰️', '🔭', '🌞'
    ];
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = '100vh';
        emoji.style.fontSize = (Math.random() * 30 + 20) + 'px';
        emoji.style.zIndex = '999';
        emoji.style.pointerEvents = 'none';
        emoji.style.filter = `
            drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))
            hue-rotate(${Math.random() * 360}deg)
        `;
        emoji.style.animation = 'cosmicFloatUp 6s linear forwards';
        emoji.textContent = cosmicEmojis[Math.floor(Math.random() * cosmicEmojis.length)];
        
        document.body.appendChild(emoji);
        
        // 6秒後に削除
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 6000);
    }, 1500);
}

// 宇宙アニメーションのCSSを動的に追加
const style = document.createElement('style');
style.textContent = `
    @keyframes cosmicFloatUp {
        from {
            transform: translateY(0) rotate(0deg) scale(0.5);
            opacity: 0.8;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
        }
        25% {
            opacity: 1;
            transform: translateY(-25vh) rotate(90deg) scale(1);
            filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8));
        }
        50% {
            transform: translateY(-50vh) rotate(180deg) scale(1.2);
            filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8));
        }
        75% {
            transform: translateY(-75vh) rotate(270deg) scale(0.8);
            filter: drop-shadow(0 0 20px rgba(255, 255, 0, 0.8));
        }
        to {
            transform: translateY(-120vh) rotate(360deg) scale(0.3);
            opacity: 0;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
        }
    }
    
    @keyframes cosmicColorShift {
        0% { filter: hue-rotate(0deg) brightness(1) saturate(1); }
        25% { filter: hue-rotate(90deg) brightness(1.2) saturate(1.5); }
        50% { filter: hue-rotate(180deg) brightness(0.8) saturate(2); }
        75% { filter: hue-rotate(270deg) brightness(1.1) saturate(1.3); }
        100% { filter: hue-rotate(360deg) brightness(1) saturate(1); }
    }
    
    @keyframes cosmicBounce {
        0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            filter: brightness(1);
        }
        25% { 
            transform: translateY(-15px) scale(1.1) rotate(5deg); 
            filter: brightness(1.3);
        }
        50% { 
            transform: translateY(-30px) scale(1.2) rotate(0deg); 
            filter: brightness(1.5);
        }
        75% { 
            transform: translateY(-15px) scale(1.1) rotate(-5deg); 
            filter: brightness(1.3);
        }
    }
    
    @keyframes galaxyRotation {
        0% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
        25% { transform: rotate(90deg) scale(1.1); filter: hue-rotate(90deg); }
        50% { transform: rotate(180deg) scale(1.2); filter: hue-rotate(180deg); }
        75% { transform: rotate(270deg) scale(1.1); filter: hue-rotate(270deg); }
        100% { transform: rotate(360deg) scale(1); filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// 星を作成
function createStars() {
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.width = (Math.random() * 4 + 2) + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = '#ffff00';
        star.style.borderRadius = '50%';
        star.style.zIndex = '1';
        star.style.pointerEvents = 'none';
        star.style.animation = `sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`;
        
        document.body.appendChild(star);
    }
}

// 宇宙カードのホバー効果
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'cosmicBounce 0.8s ease-in-out infinite';
            this.style.transform = 'scale(1.05)';
            this.style.filter = 'brightness(1.2) saturate(1.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = 'wiggle 3s ease-in-out infinite';
            this.style.transform = 'scale(1)';
            this.style.filter = '';
        });
        
        // 宇宙的なクリック効果
        card.addEventListener('click', function() {
            const cosmicColors = [
                '#ff0080', '#0080ff', '#ff8000', '#8000ff', '#00ff80',
                '#ff6b9d', '#667eea', '#f093fb', '#764ba2', '#ffecd2'
            ];
            const randomColor = cosmicColors[Math.random() * cosmicColors.length | 0];
            
            this.style.boxShadow = `
                0 0 30px ${randomColor},
                0 0 60px ${randomColor}50,
                0 0 90px ${randomColor}30
            `;
            this.style.transform = 'scale(1.15) rotate(10deg)';
            this.style.animation = 'galaxyRotation 1s ease-out';
            
            // 宇宙パーティクル爆発
            createCosmicExplosion(this);
            
            setTimeout(() => {
                this.style.boxShadow = '';
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.animation = 'wiggle 3s ease-in-out infinite';
            }, 1000);
        });
    });
}

// 価格エフェクト
function addPriceEffects() {
    const newPrice = document.querySelector('.new-price');
    
    if (newPrice) {
        setInterval(() => {
            newPrice.style.animation = 'colorShift 2s linear infinite';
        }, 3000);
    }
}

// ランダムな色変更
function addRandomColorChanges() {
    const elements = document.querySelectorAll('.neon-border, .promotion-box');
    
    setInterval(() => {
        elements.forEach(element => {
            const hue = Math.random() * 360;
            element.style.filter = `hue-rotate(${hue}deg)`;
        });
    }, 5000);
}

// キーボードイベント（隠し機能）
document.addEventListener('keydown', function(event) {
    // スペースキーで爆発効果
    if (event.code === 'Space') {
        event.preventDefault();
        createExplosion();
    }
    
    // Enterキーでレインボー効果
    if (event.code === 'Enter') {
        event.preventDefault();
        document.body.style.animation = 'colorShift 3s linear';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

// 爆発効果
function createExplosion() {
    const colors = ['#ff0080', '#0080ff', '#ff8000', '#ffff00', '#8000ff'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = colors[Math.random() * colors.length | 0];
        particle.style.borderRadius = '50%';
        particle.style.zIndex = '9999';
        particle.style.pointerEvents = 'none';
        
        const angle = (i / 15) * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(particle);
        
        let x = 0, y = 0;
        const animate = () => {
            x += vx * 0.02;
            y += vy * 0.02;
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = Math.max(0, 1 - Math.abs(x) / 300);
            
            if (particle.style.opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        animate();
    }
}

// 🦐 エビ特別効果の初期化 🦐
function initializeShrimpEffects() {
    const shrimps = document.querySelectorAll('.dancing-shrimp');
    const shrimpMessages = [
        '🦐 エビエビ〜！',
        '🦐 ダンスタイム！',
        '🦐 プリプリ〜！',
        '🦐 エビフライになりたい！',
        '🦐 踊るエビは幸せエビ！',
        '🦐 クルクル〜！',
        '🦐 エビパワー全開！'
    ];
    
    shrimps.forEach((shrimp, index) => {
        // エビクリック効果
        shrimp.addEventListener('click', function() {
            shrimpClickEffect(this, shrimpMessages);
            createShrimpExplosion(this);
            playRandomShrimpSound();
        });
        
        // ランダムな追加アニメーション
        setInterval(() => {
            if (Math.random() < 0.3) { // 30%の確率
                addRandomShrimpEffect(shrimp);
            }
        }, 3000 + (index * 500)); // エビごとに異なるタイミング
    });
    
    // エビの浮遊効果を追加
    createFloatingShrimps();
}

// エビクリック効果
function shrimpClickEffect(shrimp, messages) {
    const originalText = shrimp.textContent;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 一時的にメッセージを表示
    shrimp.textContent = randomMessage;
    shrimp.style.fontSize = '2rem';
    shrimp.style.background = 'rgba(255, 255, 255, 0.9)';
    shrimp.style.color = '#ff1744';
    shrimp.style.padding = '10px';
    shrimp.style.borderRadius = '15px';
    shrimp.style.border = '3px solid #ff6b9d';
    
    setTimeout(() => {
        shrimp.textContent = originalText;
        shrimp.style.fontSize = '';
        shrimp.style.background = '';
        shrimp.style.color = '';
        shrimp.style.padding = '';
        shrimp.style.borderRadius = '';
        shrimp.style.border = '';
    }, 1500);
}

// エビ爆発効果
function createShrimpExplosion(shrimp) {
    const rect = shrimp.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const miniShrimp = document.createElement('div');
        miniShrimp.textContent = '🦐';
        miniShrimp.style.position = 'fixed';
        miniShrimp.style.left = centerX + 'px';
        miniShrimp.style.top = centerY + 'px';
        miniShrimp.style.fontSize = '1.5rem';
        miniShrimp.style.zIndex = '10000';
        miniShrimp.style.pointerEvents = 'none';
        
        const angle = (i / 8) * Math.PI * 2;
        const velocity = Math.random() * 150 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(miniShrimp);
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx * 0.015;
            y += vy * 0.015 + 2; // 重力効果
            opacity -= 0.02;
            
            miniShrimp.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
            miniShrimp.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                miniShrimp.remove();
            }
        };
        animate();
    }
}

// ランダムエビ効果音（視覚的）
function playRandomShrimpSound() {
    const sounds = ['POP!', 'BOING!', 'SPLASH!', 'WIGGLE!', 'DANCE!'];
    const soundElement = document.createElement('div');
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    
    soundElement.textContent = randomSound;
    soundElement.style.position = 'fixed';
    soundElement.style.top = '20%';
    soundElement.style.left = '50%';
    soundElement.style.transform = 'translateX(-50%)';
    soundElement.style.fontSize = '3rem';
    soundElement.style.fontWeight = '900';
    soundElement.style.color = '#ff6b9d';
    soundElement.style.textShadow = '3px 3px 0 #000';
    soundElement.style.zIndex = '10001';
    soundElement.style.pointerEvents = 'none';
    soundElement.style.animation = 'soundBounce 1s ease-out forwards';
    
    document.body.appendChild(soundElement);
    
    setTimeout(() => {
        soundElement.remove();
    }, 1000);
}

// ランダムエビ効果
function addRandomShrimpEffect(shrimp) {
    const effects = [
        () => { // レインボー効果
            shrimp.style.animation = 'none';
            shrimp.style.filter = 'hue-rotate(0deg) drop-shadow(0 0 20px #ff6b9d)';
            let hue = 0;
            const rainbow = setInterval(() => {
                hue += 10;
                shrimp.style.filter = `hue-rotate(${hue}deg) drop-shadow(0 0 20px #ff6b9d)`;
                if (hue >= 360) {
                    clearInterval(rainbow);
                    shrimp.style.animation = '';
                    shrimp.style.filter = '';
                }
            }, 50);
        },
        () => { // 巨大化効果
            shrimp.style.transform = 'scale(2)';
            shrimp.style.zIndex = '1000';
            setTimeout(() => {
                shrimp.style.transform = '';
                shrimp.style.zIndex = '';
            }, 1000);
        },
        () => { // 分身効果
            const clone = shrimp.cloneNode(true);
            clone.style.position = 'absolute';
            clone.style.opacity = '0.5';
            clone.style.filter = 'blur(2px)';
            shrimp.parentNode.appendChild(clone);
            setTimeout(() => {
                clone.remove();
            }, 2000);
        }
    ];
    
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    randomEffect();
}

// 浮遊エビを作成
function createFloatingShrimps() {
    setInterval(() => {
        if (Math.random() < 0.4) { // 40%の確率
            const floatingShrimp = document.createElement('div');
            floatingShrimp.textContent = '🦐';
            floatingShrimp.style.position = 'fixed';
            floatingShrimp.style.left = Math.random() * 100 + 'vw';
            floatingShrimp.style.bottom = '-50px';
            floatingShrimp.style.fontSize = (Math.random() * 20 + 30) + 'px';
            floatingShrimp.style.zIndex = '500';
            floatingShrimp.style.pointerEvents = 'none';
            floatingShrimp.style.animation = 'shrimpFloatUp 6s linear forwards';
            floatingShrimp.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 157, 0.8))';
            
            document.body.appendChild(floatingShrimp);
            
            setTimeout(() => {
                if (floatingShrimp.parentNode) {
                    floatingShrimp.remove();
                }
            }, 6000);
        }
    }, 3000);
}

// 浮遊エビアニメーション用CSS追加
const shrimpStyle = document.createElement('style');
shrimpStyle.textContent = `
    @keyframes shrimpFloatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        50% {
            opacity: 1;
        }
        to {
            transform: translateY(-120vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes soundBounce {
        0% {
            transform: translateX(-50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translateX(-50%) scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: translateX(-50%) scale(0.8) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(shrimpStyle);

// 🌌 宇宙効果の初期化 🌌
function initializeCosmicEffects() {
    // 宇宙パーティクルの作成
    createBackgroundStars();
    // 流れ星効果
    createShootingStars();
    // 宇宙風のカーソル効果
    addCosmicCursorTrail();
}

// 背景星座の作成
function createBackgroundStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'cosmic-star';
        star.style.position = 'fixed';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = `hsl(${Math.random() * 60 + 200}, 100%, 80%)`;
        star.style.borderRadius = '50%';
        star.style.zIndex = '2';
        star.style.pointerEvents = 'none';
        star.style.boxShadow = `0 0 10px currentColor`;
        star.style.animation = `
            cosmicTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite,
            cosmicFloat ${Math.random() * 10 + 15}s linear infinite
        `;
        
        document.body.appendChild(star);
    }
}

// 流れ星効果
function createShootingStars() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30%の確率
            const shootingStar = document.createElement('div');
            shootingStar.style.position = 'fixed';
            shootingStar.style.left = '100vw';
            shootingStar.style.top = Math.random() * 50 + 'vh';
            shootingStar.style.width = '2px';
            shootingStar.style.height = '2px';
            shootingStar.style.backgroundColor = '#fff';
            shootingStar.style.borderRadius = '50%';
            shootingStar.style.zIndex = '998';
            shootingStar.style.pointerEvents = 'none';
            shootingStar.style.boxShadow = `
                0 0 20px #fff,
                0 0 40px #00ffff,
                0 0 60px #ff00ff
            `;
            shootingStar.style.animation = 'shootingStarTrail 3s linear forwards';
            
            document.body.appendChild(shootingStar);
            
            setTimeout(() => {
                if (shootingStar.parentNode) {
                    shootingStar.remove();
                }
            }, 3000);
        }
    }, 2000);
}

// 宇宙カーソルトレイル
function addCosmicCursorTrail() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 確率でパーティクルを生成
        if (Math.random() < 0.1) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = mouseX + 'px';
            particle.style.top = mouseY + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            particle.style.borderRadius = '50%';
            particle.style.zIndex = '997';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'cursorParticle 1s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    });
}

// 銀河パーティクル作成
function createGalaxyParticles() {
    setInterval(() => {
        if (Math.random() < 0.2) { // 20%の確率
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.width = (Math.random() * 8 + 4) + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `
                radial-gradient(
                    circle at center,
                    hsl(${Math.random() * 360}, 100%, 70%) 0%,
                    transparent 70%
                )
            `;
            particle.style.borderRadius = '50%';
            particle.style.zIndex = '3';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'galaxyParticle 8s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 8000);
        }
    }, 3000);
}

// 宇宙爆発効果
function createCosmicExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `
            radial-gradient(
                circle at center,
                hsl(${Math.random() * 360}, 100%, 80%) 0%,
                transparent 70%
            )
        `;
        particle.style.borderRadius = '50%';
        particle.style.zIndex = '10000';
        particle.style.pointerEvents = 'none';
        
        const angle = (i / 15) * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(particle);
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx * 0.01;
            y += vy * 0.01;
            opacity -= 0.015;
            
            particle.style.transform = `
                translate(${x}px, ${y}px) 
                rotate(${x * 2}deg) 
                scale(${opacity})
            `;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        animate();
    }
}

// 宇宙音響効果（視覚的）
function addCosmicSoundEffects() {
    const cosmicSounds = ['✨ COSMIC!', '🌌 NEBULA!', '🚀 WARP!', '💫 STELLAR!', '🌠 METEOR!'];
    
    // ランダムに宇宙音響を表示
    setInterval(() => {
        if (Math.random() < 0.1) { // 10%の確率
            const soundElement = document.createElement('div');
            const randomSound = cosmicSounds[Math.floor(Math.random() * cosmicSounds.length)];
            
            soundElement.textContent = randomSound;
            soundElement.style.position = 'fixed';
            soundElement.style.top = Math.random() * 30 + 10 + '%';
            soundElement.style.left = Math.random() * 60 + 20 + '%';
            soundElement.style.fontSize = '2rem';
            soundElement.style.fontWeight = '900';
            soundElement.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            soundElement.style.textShadow = '0 0 20px currentColor';
            soundElement.style.zIndex = '996';
            soundElement.style.pointerEvents = 'none';
            soundElement.style.animation = 'cosmicSoundWave 2s ease-out forwards';
            
            document.body.appendChild(soundElement);
            
            setTimeout(() => {
                soundElement.remove();
            }, 2000);
        }
    }, 5000);
}

// 追加の宇宙アニメーション
const cosmicAnimationStyle = document.createElement('style');
cosmicAnimationStyle.textContent = `
    @keyframes cosmicTwinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
    }
    
    @keyframes cosmicFloat {
        0% { transform: translateX(0) translateY(0); }
        100% { transform: translateX(-20px) translateY(-20px); }
    }
    
    @keyframes shootingStarTrail {
        0% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
        }
        50% {
            opacity: 1;
            transform: translateX(-50vw) translateY(25vh) scale(1.5);
        }
        100% {
            transform: translateX(-100vw) translateY(50vh) scale(0.5);
            opacity: 0;
        }
    }
    
    @keyframes cursorParticle {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
    
    @keyframes galaxyParticle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        25% {
            opacity: 1;
            transform: scale(1) rotate(90deg);
        }
        75% {
            opacity: 0.8;
            transform: scale(1.5) rotate(270deg);
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes cosmicSoundWave {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(2) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cosmicAnimationStyle);