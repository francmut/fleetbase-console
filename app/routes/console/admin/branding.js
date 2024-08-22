import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ConsoleAdminBrandingRoute extends Route {
    @service store;

    model() {
        return this.store.findRecord('brand', 1);
    }
}
