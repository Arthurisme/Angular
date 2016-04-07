System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Max';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    <h1>Hi, I'am {{name}} and this is my first Angular 2 component!<span [class.is-awesome] = \"inputElement.value === 'yes' \" >It's so awesome!</span></h1>\n    <br>\n    Is it awesome?\n    <input type =\"text\" #inputElement (keyup)=\"3\">\n\n    <button [class.button-display-stauts] = \"inputElement.value === 'yes' \"> Only enabled if \"yes\" was entered. </button>\n    ",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEtBQUssQ0FBQTtnQkFFaEIsQ0FBQztnQkFuQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUMsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLDhYQU9UO3dCQUVELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3FCQUVyQyxDQUFDOzt3Q0FBQTtnQkFLTiwyQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdURBR0MsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOidteS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGgxPkhpLCBJJ2FtIHt7bmFtZX19IGFuZCB0aGlzIGlzIG15IGZpcnN0IEFuZ3VsYXIgMiBjb21wb25lbnQhPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdID0gXCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnIFwiID5JdCdzIHNvIGF3ZXNvbWUhPC9zcGFuPjwvaDE+XG4gICAgPGJyPlxuICAgIElzIGl0IGF3ZXNvbWU/XG4gICAgPGlucHV0IHR5cGUgPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjNcIj5cblxuICAgIDxidXR0b24gW2NsYXNzLmJ1dHRvbi1kaXNwbGF5LXN0YXV0c10gPSBcImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgXCI+IE9ubHkgZW5hYmxlZCBpZiBcInllc1wiIHdhcyBlbnRlcmVkLiA8L2J1dHRvbj5cbiAgICBgLFxuXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ11cblxuICAgIH0pXG5cbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCB7XG4gICAgbmFtZSA9ICdNYXgnXG5cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
