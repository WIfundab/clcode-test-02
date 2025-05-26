// ドン・キホーテ風の派手なJavaScript効果

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeEffects();
    createFloatingEmojis();
    addRandomColorChanges();
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
    const emojis = ['⭐', '🌟', '✨', '💫', '🎊', '🎉', '🚀', '💥'];
    
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