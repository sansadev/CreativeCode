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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var IfDirective = (function () {
    function IfDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfDirective.prototype, "dbIf", {
        set: function (condition) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return IfDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], IfDirective.prototype, "dbIf", null);
IfDirective = __decorate([
    core_1.Directive({ selector: '[dbIf]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.TemplateRef !== "undefined" && core_2.TemplateRef) === "function" && _a || Object, typeof (_b = typeof core_2.ViewContainerRef !== "undefined" && core_2.ViewContainerRef) === "function" && _b || Object])
], IfDirective);
exports.IfDirective = IfDirective;
var _a, _b;
//# sourceMappingURL=if.directive.js.map