import os
import numpy as np
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE","RealDashboard.settings")
django.setup()

from main.models import Sale

def analytical():
    sale = Sale.objects.values_list("quantity_sold",flat=True)

    new_sale = np.array(sale)

    if len(new_sale) <= 0:
        print("No data is found...")
    
    mean = np.mean(new_sale)
    
    std = np.std(new_sale)

    print("Data is ------------->")
    print(f"the mean is {mean:.2f}")
    print(f"the std is {std:.2f}")

if __name__ == "__main__":
    analytical()