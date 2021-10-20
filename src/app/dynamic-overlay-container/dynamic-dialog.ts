import {Location} from '@angular/common';
import {Inject, Injectable, Injector, Optional, Renderer2, SkipSelf} from '@angular/core';
import {DynamicOverlay} from './dynamic-overlay';
import {MatDialog, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {ScrollStrategy, OverlayContainer} from '@angular/cdk/overlay';

@Injectable()
export class DynamicMatDialog extends MatDialog {

    private _customOverlay: DynamicOverlay;

    constructor(_overlay: DynamicOverlay,
                _injector: Injector,
                @Optional() location: Location,
                @Inject(MAT_DIALOG_SCROLL_STRATEGY) _scrollStrategy: ScrollStrategy,
                @Optional() @SkipSelf() _parentDialog: DynamicMatDialog) {

        super(
            _overlay,
            _injector,
            location,
            _injector.get(MAT_DIALOG_DEFAULT_OPTIONS, null),
            _scrollStrategy,
            _parentDialog,
            _injector.get(OverlayContainer)
        );

        this._customOverlay = _overlay;
    }

    public setContainerElement(containerElement: HTMLElement, renderer: Renderer2): void {

        // need to apply this styling to make the backdrop with position: fixed styling cover only the containerElement
        renderer.setStyle(containerElement, 'transform', 'translateZ(0)');

        this._customOverlay.setContainerElement(containerElement);
    }
}
