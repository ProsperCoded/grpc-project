import { Controller, Get, Inject, OnModuleInit, Req } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  PRODUCTS_PACKAGE_NAME,
  ProductServiceClient,
} from 'types/proto/products';

@Controller('product')
export class ProductController implements OnModuleInit {
  private productService: ProductServiceClient;
  constructor(
    @Inject(PRODUCTS_PACKAGE_NAME)
    private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.productService = this.client.getService<ProductServiceClient>(
      'ProductService' // This should match the service name in your proto file
    );
  }

  @Get()
  findOne(@Req() req) {
    return this.productService.getProduct({
      productId: 12,
    });
  }
}
