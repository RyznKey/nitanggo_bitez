import React from 'react';
export default function AboutView({ isActive }: { isActive: boolean }) {
    if (!isActive) return null;
    return (
        <div className="page-view active">
            <div className="section-title-center"><h3>Kisah Nitanggo Bitez 🤎</h3></div>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7', color: 'var(--text-main)' }}>Berawal dari dapur rumahan, Nitanggo Bitez berkomitmen menghadirkan cita rasa dessert premium yang manisnya pas dan tidak bikin enek...</p>
        </div>
    );
}