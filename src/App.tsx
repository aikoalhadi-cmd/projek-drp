/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ARTICLES } from './data/articles';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { PhysicsLabPage } from './pages/PhysicsLabPage';
import { AboutPage } from './pages/AboutPage';
import { GalaxyBackground } from './components/GalaxyBackground';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (slug: string) => {
    navigateTo(`/articles/${slug}`);
  };

  // Determine which page to render based on URL pattern
  const renderCurrentPage = () => {
    // Article Detail Route
    if (currentRoute.startsWith('/articles/')) {
      const slug = currentRoute.replace('/articles/', '').replace(/\/$/, '');
      const article = ARTICLES.find((a) => a.slug === slug);

      if (article) {
        return (
          <ArticleDetailPage
            article={article}
            allArticles={ARTICLES}
            onNavigate={navigateTo}
            onSelectArticle={handleSelectArticle}
          />
        );
      }
      // If slug not found, fallback to first article or explore
      return (
        <ArticleDetailPage
          article={ARTICLES[0]}
          allArticles={ARTICLES}
          onNavigate={navigateTo}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    if (currentRoute === '/explore') {
      return (
        <ExplorePage
          articles={ARTICLES}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    if (currentRoute === '/physics-lab') {
      return (
        <PhysicsLabPage
          onNavigate={navigateTo}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    if (currentRoute === '/about') {
      return <AboutPage />;
    }

    // Default: Home Page
    return (
      <HomePage
        articles={ARTICLES}
        onNavigate={navigateTo}
        onSelectArticle={handleSelectArticle}
      />
    );
  };

  return (
    <div className="min-h-screen text-[#F3F6FC] flex flex-col justify-between selection:bg-[#38bdf8]/30 selection:text-[#38bdf8] relative bg-[#030712]">
      {/* Galaxy night sky background with sparkling stars and text contrast protection */}
      <GalaxyBackground />

      <SiteHeader activeRoute={currentRoute} onNavigate={navigateTo} />
      
      <main className="flex-1 w-full relative z-10" id="main-content">
        {renderCurrentPage()}
      </main>

      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
