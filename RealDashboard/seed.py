import os
import django
import random
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'RealDashboard.settings')
django.setup()

from main.models import Product,Sale

faker = Faker()

def run_seed():
    product_list = ['Laptop', 'Smartphone', 'Headphones', 'Camera', 'Smartwatch']

    # 1. First, create ALL products
    for p_name in product_list:
        Product.objects.get_or_create(
            name = p_name,
            defaults={
                'price': random.uniform(100, 1000),
                'stock_qty' : random.randint(20, 100)
            }
        )
    
    # 2. NOW get the full list (it will have 5 items)
    all_products = Product.objects.all()

    # 3. Create sales (this is now OUTSIDE the first loop)
    for _ in range(50):
        Sale.objects.create(
            product = random.choice(all_products),
            quantity_sold = random.randint(1, 5)
        )
    
    print("Seeding completed correctly.")

if __name__ == '__main__':
    run_seed() 