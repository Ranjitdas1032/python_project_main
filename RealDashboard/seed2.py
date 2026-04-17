import django
import os
import random
from datetime import datetime , timedelta
from faker import Faker

os.environ.setdefault("DJANGO_SETTINGS_MODULE","RealDashboard.settings")
django.setup()

from main.models import Product,Sale

def seed():
    print("Deleting old data :")
    Sale.objects.all().delete()

    products_data = ['Laptop', 'Smartphone', 'Headphones', 'Camera', 'Smartwatch']

    for product in products_data:
        Product.objects.get_or_create(
            name = product,
            defaults={
                'price': random.uniform(100, 1000),
                'stock_qty' : random.randint(20, 100)
            }
        )

    fake = Faker()
    product_name = Product.objects.all()
    print("creating new data ...")

    sales_new_data = []

    for _ in range(0,1000):


        random_date = random.randint(0,180)
        applied_date = datetime.now() - timedelta(days=random_date)

        sale = Sale(
            product = random.choice(product_name),
            quantity_sold = random.randint(1,10)
        )

        sale.sales_date = applied_date
        sales_new_data.append(sale)
    
    for sale in Sale.objects.all():
        sale.sales_date = datetime.now() - timedelta(days= random.randint(1,180))
        sale.save()
    
    Sale.objects.bulk_create(sales_new_data)
    print("data created successfully ...")

if __name__ == "__main__":
    seed()
         



