import {
    Overlay,
    ScrollStrategyOptions,
    OverlayKeyboardDispatcher,
    OverlayPositionBuilder,
    OverlayOutsideClickDispatcher
} from '@angular/cdk/overlay';
import {ComponentFactoryResolver, Injectable, Injector, NgZone, Inject} from '@angular/core';
import {DynamicOverlayContainer} from './dynamic-overlay-container';
import {Directionality} from '@angular/cdk/bidi';
import {DOCUMENT, Location} from '@angular/common';


@Injectable()
export class DynamicOverlay extends Overlay {

    private _dynamicOverlayContainer: DynamicOverlayContainer;

    constructor(scrollStrategies: ScrollStrategyOptions,
                _overlayContainer: DynamicOverlayContainer,
                _componentFactoryResolver: ComponentFactoryResolver,
                _positionBuilder: OverlayPositionBuilder,
                _keyboardDispatcher: OverlayKeyboardDispatcher,
                _injector: Injector,
                _ngZone: NgZone,
                @Inject(DOCUMENT) _document: Document,
                _directionality: Directionality,
                _location: Location,
                _outsideClickDispatcher: OverlayOutsideClickDispatcher) {


        super(scrollStrategies,
            _overlayContainer,
            _componentFactoryResolver,
            _positionBuilder,
            _keyboardDispatcher,
            _injector,
            _ngZone,
            _document,
            _directionality,
            _location,
            _outsideClickDispatcher
        );
        this._dynamicOverlayContainer = _overlayContainer;
    }

    public setContainerElement(containerElement: HTMLElement): void {

        this._dynamicOverlayContainer.setContainerElement(containerElement);
    }
}
