import React from 'react';

export default function AboutView({ isActive }: { isActive: boolean }) {
    if (!isActive) return null;

    return (
        <div className="page-view active">
            <section className="about-shell">
                <div className="section-title-center">
                    <span className="about-tag">Dessert premium yang creamy</span>
                    <h3>Nyicheeze 🧀</h3>
                    <p>
                        Nyicheeze adalah dessert yang memadukan gurihnya cream cheese premium dengan kelembutan biskuit,
                        disajikan dalam cube-cup sehingga siap santap dan mudah dibawa kemana saja.
                    </p>
                </div>

                <div className="about-grid">
                    <article className="about-card about-highlight">
                        <h4>Kenapa banyak disukai?</h4>
                        <p>
                            Setiap suapan menghadirkan sensasi manis-gurih yang lumer di mulut, cocok untuk teman santai,
                            hadiah, atau camilan favorit di mana pun Anda berada.
                        </p>
                        <ul className="about-bullets">
                            <li>Cube-cup praktis dan siap santap</li>
                            <li>Rasa creamy dengan tekstur biskuit lembut</li>
                            <li>Pas untuk berbagai momen spesial</li>
                        </ul>
                    </article>

                    <article className="about-card">
                        <h4>3 Varian Rasa Unggulan</h4>
                        <div className="variant-grid">
                            <article className="variant-card">
                                <span className="variant-label">01</span>
                                <h5>Choco cheeze</h5>
                                <p>Perpaduan cokelat dan cream cheese gurih serta biskuit yang lembut.</p>
                            </article>
                            <article className="variant-card">
                                <span className="variant-label">02</span>
                                <h5>Tiramisu cheeze</h5>
                                <p>Kelezatan aroma dan rasa kopi yang dipadukan dengan cream cheese yang gurih.</p>
                            </article>
                            <article className="variant-card">
                                <span className="variant-label">03</span>
                                <h5>Double cheeze</h5>
                                <p>Varian andalan pecinta keju dengan rasa gurih, creamy, dan melimpah parutan keju.</p>
                            </article>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}