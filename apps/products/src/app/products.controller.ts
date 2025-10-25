import {
  ProductServiceController,
  ProductRequest,
  ProductResponse,
  ProductServiceControllerMethods,
} from 'types/proto/products';
import { Observable } from 'rxjs';
import { Controller } from '@nestjs/common';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  getProduct(
    request: ProductRequest
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productId: 12,
      name: 'Laptop',
      price: 1000,
    };
  }
}
