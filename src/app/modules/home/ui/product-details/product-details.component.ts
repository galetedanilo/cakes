import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProductModel } from "../../models";

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
    @Input() data!: IProductModel;
}
