import AppController from '@components/controller/controller';
import AppView from '@components/view/appView';
import { getElement } from '@/helpers/getElement';
import { Status } from '@/types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = getElement('.sources');

        this.view.showSourcesMessage(Status.Loading);
        this.view.showNewsMessage(Status.Empty);

        sources.addEventListener('click', (e: MouseEvent) => {
            const sourceItem = e.target instanceof HTMLElement ? e.target.closest('.source__item') : null;

            if (!sourceItem || sourceItem.classList.contains('source__item--active')) return;

            this.view.showNewsMessage(Status.Loading);
            sources.querySelectorAll('.source__item').forEach((item) => item.classList.remove('source__item--active'));
            sourceItem.classList.add('source__item--active');

            this.controller.getNews(
                e,
                (data) => this.view.drawNews(data),
                () => this.view.showNewsMessage(Status.Error)
            );
        });

        this.controller.getSources(
            (data) => this.view.drawSources(data),
            () => this.view.showSourcesMessage(Status.Error)
        );
    }
}

export default App;
