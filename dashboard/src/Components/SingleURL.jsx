import React, { useState } from 'react';

const SingleURL = ({ id, originalUrl, shortUrl, date, clicks, conversions }) => {
    const [copied, setCopied] = useState(false);
    const [localOriginalUrl, setLocalOriginalUrl] = useState(originalUrl);
    const [localShortUrl, setLocalShortUrl] = useState(shortUrl);
    const [urlError, setUrlError] = useState('');

    const handleCopy = () => {
        navigator.clipboard.writeText(localShortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleUrlChange = (e) => {
        const url = e.target.value;
        setLocalOriginalUrl(url);
        
        // Validate URL format
        if (url && !isValidDriveOrMegaUrl(url)) {
            setUrlError('Please enter a valid Google Drive or Mega link');
        } else {
            setUrlError('');
        }
    };

    const isValidDriveOrMegaUrl = (url) => {
        // Check if URL contains drive.google.com or mega.nz
        return url.includes('drive.google.com') || url.includes('mega.nz');
    };

    const handleProcess = () => {
        // This function will be implemented later
        console.log('Processing URL:', localOriginalUrl);
    };

    return (
        <div className="url-container">
            <div className="url-header">
                <h3 className="url-title">URL #{id + 1}</h3>
                <span className="url-date">{date}</span>
            </div>

            <div className="url-input-container">
                <div className="url-input-flex">
                    <input
                        className={`url-input ${urlError ? 'url-input-error' : ''}`}
                        type="text"
                        value={localOriginalUrl}
                        onChange={handleUrlChange}
                        placeholder="Enter Google Drive or Mega link"
                    />
                    <button className="process-button" onClick={handleProcess}>
                        Process <span className="arrow">→</span>
                    </button>
                </div>
                {urlError && <div className="url-error-message">{urlError}</div>}
            </div>

            <div className="url-output-container">
                <input
                    className="url-output"
                    type="text"
                    value={localShortUrl}
                    onChange={(e) => setLocalShortUrl(e.target.value)}
                    placeholder="Shortened URL"
                />
                <button className="copy-button" onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            <div className="url-actions">
                
            </div>

            <div className="url-stats">
                <div className="stat-item">
                    <span className="stat-label">Clicks</span>
                    <span className="stat-value-url">{clicks}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Conversions</span>
                    <span className="stat-value-url">{conversions}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Conversion Rate</span>
                    <span className="stat-value-url">{clicks > 0 ? Math.round((conversions / clicks) * 100) : 0}%</span>
                </div>
            </div>
        </div>
    );
};

export default SingleURL;
