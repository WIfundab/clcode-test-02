// ドン・キホーテ風の派手なJavaScript効果

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeEffects();
    createFloatingEmojis();
    addRandomColorChanges();
    initializeShrimpEffects();
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

// 浮遊する絵文字を作成
function createFloatingEmojis() {
    const emojis = ['⭐', '🌟', '✨', '💫', '🎊', '🎉', '🚀', '💥', '🦐', '🦐', '🦐'];
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = '100vh';
        emoji.style.fontSize = (Math.random() * 30 + 20) + 'px';
        emoji.style.zIndex = '999';
        emoji.style.pointerEvents = 'none';
        emoji.style.animation = 'floatUp 4s linear forwards';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        document.body.appendChild(emoji);
        
        // 4秒後に削除
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 4000);
    }, 2000);
}

// 浮遊アニメーションのCSSを動的に追加
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes colorShift {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes randomBounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
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

// カードのホバー効果
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'randomBounce 0.6s ease-in-out infinite';
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = 'wiggle 3s ease-in-out infinite';
            this.style.transform = 'scale(1)';
        });
        
        // ランダムなクリック効果
        card.addEventListener('click', function() {
            const colors = ['#ff0080', '#0080ff', '#ff8000', '#8000ff', '#00ff80'];
            const randomColor = colors[Math.random() * colors.length | 0];
            
            this.style.boxShadow = `0 0 30px ${randomColor}`;
            this.style.transform = 'scale(1.1) rotate(5deg)';
            
            setTimeout(() => {
                this.style.boxShadow = '';
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
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