import { useState } from 'react';

export default function BookCard({ book, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="book-card">
      <button
        type="button"
        className={`book-cover cover-${book.cover}`}
        aria-label={`${expanded ? 'ซ่อน' : 'ดู'}รายละเอียด ${book.title}`}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="cover-edition">{book.label}</span>
        <span className="cover-ornament" aria-hidden="true">{index === 0 ? '◌' : index === 1 ? '✳' : index === 2 ? '✉' : '❋'}</span>
        <span className="cover-title">{book.title}</span>
        <span className="cover-subtitle">{book.subtitle}</span>
        <span className="cover-author">MIRA HART</span>
      </button>
      <div className="book-meta">
        <div>
          <p className="book-genre">{book.genre}</p>
          <h3>{book.title}</h3>
        </div>
        <button
          type="button"
          className="round-arrow"
          aria-label={`${expanded ? 'ซ่อน' : 'อ่าน'}รายละเอียด ${book.title}`}
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? '−' : '↗'}
        </button>
      </div>
      {expanded && <p className="book-description">{book.description}</p>}
    </article>
  );
}
