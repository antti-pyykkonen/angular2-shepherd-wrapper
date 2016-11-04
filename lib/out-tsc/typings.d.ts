declare module 'Shepherd' {
    declare var _default: TetherShepherd.ShepherdStatic;
    export = _default;
}
declare namespace TetherShepherd {
    var Shepherd: ShepherdStatic;
    interface ShepherdStatic {
        on(eventName: string, handler: Function, context?: any): any;
        off(eventName: string, handler?: Function): any;
        once(eventName: string, handler: Function, context?: any): any;
        activeTour: IShepherdTour;
        Tour: IShepherdTour;
    }
    interface IShepherdTourOptions {
        steps?: IShepherdTourStep[];
        defaults?: IShepherdTourStepOptions;
    }
    interface IShepherdTour {
        new (options?: IShepherdTourOptions): IShepherdTour;
        addStep(id: string, options: IShepherdTourStepOptions): IShepherdTour;
        addStep(id: string, options: IShepherdTourStep): IShepherdTour;
        getById(id: string): IShepherdTourStep;
        next(): void;
        back(): void;
        cancel(): void;
        hide(): void;
        show(): void;
        show(id: number): void;
        show(id: string): void;
        start(): void;
        getCurrentStep(): IShepherdTourStep;
        on(eventName: string, handler: Function, context?: any): any;
        off(eventName: string, handler?: Function): any;
        once(eventName: string, handler: Function, context?: any): any;
    }
    interface IShepherdTourStep {
        show(): void;
        hide(): void;
        cancel(): void;
        complete(): void;
        scrollTo(): void;
        isOpen(): boolean;
        destroy(): void;
        on(eventName: string, handler: Function, context?: any): any;
        off(eventName: string, handler?: Function): any;
        once(eventName: string, handler: Function, context?: any): any;
    }
    interface IShepherdTourStepOptions {
        text?: any;
        title?: string;
        attachTo?: any;
        beforeShowPromise?: any;
        classes?: string;
        buttons?: IShepherdTourButton[];
        advanceOn?: any;
        showCancelLink?: boolean;
        scrollTo?: boolean;
        when?: any;
        showOn?: () => boolean;
        tetherOptions?: any;
    }
    interface IShepherdTourButton {
        text: string;
        classes?: string;
        action?: Function;
        events?: IShepherdTourButtonEventHash;
    }
    interface IShepherdTourButtonEventHash {
        [Key: string]: Function;
    }
    interface IShepherdTourAttachProperties {
        element: string;
        on: string;
    }
}
