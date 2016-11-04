import { ShepherdStatic, IShepherdTourOptions, IShepherdTour } from './interfaces';
export declare class ShepherdService {
    private tourStore;
    shepherd: ShepherdStatic;
    constructor();
    addTour(name: string, options?: IShepherdTourOptions): IShepherdTour;
    getTour(key: string): IShepherdTour;
}
