import React, { useState } from 'react';
import SingleURL from './SingleURL';

const AllURLs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    // Create 20 empty URLs
    const emptyURLs = Array(20).fill().map((_, index) => ({
        id: index,
        originalUrl: '',
        shortUrl: '',
        date: '',
        clicks: 0,
        conversions: 0
    }));

    // Filter URLs based on search term and filter
    const filteredURLs = emptyURLs.filter(url => {
        const matchesSearch = url.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
            url.shortUrl.toLowerCase().includes(searchTerm.toLowerCase());

        if (filter === 'all') return matchesSearch;
        if (filter === 'mostClicks') return matchesSearch && url.clicks > 500;
        if (filter === 'recent') {
            return matchesSearch;
        }

        return matchesSearch;
    });

    // Pagination
    const urlsPerPage = 5;
    const totalPages = Math.ceil(filteredURLs.length / urlsPerPage);
    const indexOfLastURL = currentPage * urlsPerPage;
    const indexOfFirstURL = indexOfLastURL - urlsPerPage;
    const currentURLs = filteredURLs.slice(indexOfFirstURL, indexOfLastURL);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="all-urls-container">
            <div className="all-urls-header">
                <h1 className="all-urls-title">All URLs</h1>
                <p className="all-urls-subtitle">Manage and track all your shortened URLs in one place</p>
            </div>

            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search URLs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="filter-select"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All URLs</option>
                    <option value="mostClicks">Most Clicks</option>
                    <option value="recent">Recent</option>
                </select>
            </div>

            <div className="urls-list">
                {currentURLs.map(url => (
                    <SingleURL
                        key={url.id}
                        id={url.id}
                        originalUrl={url.originalUrl}
                        shortUrl={url.shortUrl}
                        date={url.date}
                        clicks={url.clicks}
                        conversions={url.conversions}
                    />
                ))}
            </div>

            <div className="pagination">
                <button
                    className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllURLs;
