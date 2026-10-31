import AppController from '@components/controller/controller';
import AppView from '@components/view/appView';
import { getElement } from '@/helpers/getElement';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = getElement('.sources');

        sources.addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
