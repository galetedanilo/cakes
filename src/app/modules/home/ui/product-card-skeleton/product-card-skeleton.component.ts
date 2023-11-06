import { Component } from "@angular/core";
import { SkeletonModule } from "primeng/skeleton";

@Component({
    selector: 'app-product-card-skeleton',
    standalone: true,
    imports: [SkeletonModule],
    templateUrl: './product-card-skeleton.component.html'
})
export class ProductCardSkeletonComponent {}
