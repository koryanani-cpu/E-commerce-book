import { books } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';
import BookCard from './BookCard.jsx';

export default function BooksSection() {
  return (
    <section className="books-section section-pad" id="books">
      <div className="container">
        <div className="books-heading-row">
          <SectionHeading
            eyebrow="เรื่องเล่าที่อยากแบ่งปัน"
            title={<>หนังสือและผลงาน<br /><em>จากปลายปากกา</em></>}
            description="แต่ละเล่มเริ่มต้นจากคำถามเล็ก ๆ ก่อนจะเติบโตเป็นโลกอีกใบที่อยากชวนคุณเข้าไปสำรวจ"
          />
          <a className="text-link desktop-only" href="#contact">สอบถามเกี่ยวกับหนังสือ <span aria-hidden="true">↗</span></a>
        </div>
        <div className="books-grid">
          {books.map((book, index) => <BookCard key={book.id} book={book} index={index} />)}
        </div>
        <p className="books-footnote"><span>✳</span> กดที่ปกหนังสือเพื่ออ่านเรื่องย่อ</p>
      </div>
    </section>
  );
}
