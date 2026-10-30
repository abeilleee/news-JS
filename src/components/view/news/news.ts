import { getElement } from '@/helpers/getElement';
import { Article } from '@/types';
import './news.css';

class News {
    public draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = getElement<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);

            if (newsClone instanceof DocumentFragment) {
                if (idx % 2) newsClone.querySelector<HTMLElement>('.news__item')?.classList.add('alt');

                const newsPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo');
                const newsAuthor = newsClone.querySelector<HTMLElement>('.news__meta-author');
                const newsDate = newsClone.querySelector<HTMLElement>('.news__meta-date');
                const newsTitle = newsClone.querySelector<HTMLElement>('.news__description-title');
                const newsSource = newsClone.querySelector<HTMLElement>('.news__description-source');
                const newsContent = newsClone.querySelector<HTMLElement>('.news__description-content');
                const newsReadMoreLink = newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');

                if (newsPhoto)
                    newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                if (newsAuthor) newsAuthor.textContent = item.author || item.source.name;
                if (newsDate) newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                if (newsTitle) newsTitle.textContent = item.title;
                if (newsSource) newsSource.textContent = item.source.name;
                if (newsContent) newsContent.textContent = item.description ?? '';
                if (newsReadMoreLink) newsReadMoreLink.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        const newsContainer = getElement<HTMLElement>('.news');

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
