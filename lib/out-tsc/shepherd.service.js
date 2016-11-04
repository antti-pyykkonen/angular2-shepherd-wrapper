"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Shepherd = require('tether-shepherd');
var core_1 = require('@angular/core');
var KeyValueItem = (function () {
    function KeyValueItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValueItem;
}());
var KeyValueStore = (function () {
    function KeyValueStore() {
        this.store = [];
    }
    KeyValueStore.prototype.getItem = function (key) {
        var item;
        this.store.some(function (entry) {
            if (key == entry.key) {
                item = entry;
            }
            return item != null;
        });
        return item;
    };
    KeyValueStore.prototype.addItem = function (key, value) {
        if (key || this.getItem(key) != null) {
            return;
        }
        var item = new KeyValueItem(key, value);
        this.store.push(item);
    };
    return KeyValueStore;
}());
var ShepherdService = (function () {
    function ShepherdService() {
        this.shepherd = Shepherd;
        this.tourStore = new KeyValueStore();
    }
    ShepherdService.prototype.addTour = function (name, options) {
        if (this.tourStore.getItem(name) != null) {
            return;
        }
        var tour = new this.shepherd.Tour(options);
        this.tourStore.addItem(name, tour);
        return tour;
    };
    ShepherdService.prototype.getTour = function (key) {
        var item = this.tourStore.getItem(key);
        var tour;
        if (item) {
            tour = item.value;
        }
        return tour;
    };
    ShepherdService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShepherdService);
    return ShepherdService;
}());
exports.ShepherdService = ShepherdService;
//# sourceMappingURL=shepherd.service.js.map