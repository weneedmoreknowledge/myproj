import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

// 상품 클래스
class Product {
    private String name;
    private String category;
    private String description;
    private String imageURL;

    public Product(String name, String category, String description, String imageURL) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageURL = imageURL;
    }

    // 상세 정보 출력
    public void showDetails() {
        System.out.println("Product Name: " + name);
        System.out.println("Category: " + category);
        System.out.println("Description: " + description);
        System.out.println("Image URL: " + imageURL);
    }
}

// 쇼핑몰 클래스
public class ShoppingMall {
    private Map<String, List<Product>> productsByCategory;

    public ShoppingMall() {
        productsByCategory = new HashMap<>();
        productsByCategory.put("all", new ArrayList<>());
        productsByCategory.put("top", new ArrayList<>());
        productsByCategory.put("btm", new ArrayList<>());
        productsByCategory.put("other", new ArrayList<>());
    }

    // 제품 등록
    public void addProduct(String name, String category, String description, String imageURL) {
        Product product = new Product(name, category, description, imageURL);
        productsByCategory.get("all").add(product);
        productsByCategory.get(category).add(product);
    }

    // 카테고리별 상품 목록 출력
    public void showProductsByCategory(String category) {
        List<Product> products = productsByCategory.get(category);
        if (products != null) {
            for (Product product : products) {
                System.out.println(product);
            }
        } else {
            System.out.println("No products found in this category.");
        }
    }

    // 상세 페이지 표시
    public void showProductDetails(String name) {
        List<Product> allProducts = productsByCategory.get("all");
        for (Product product : allProducts) {
            if (product.getName().equals(name)) {
                product.showDetails();
                return;
            }
        }
        System.out.println("Product not found.");
    }

    public static void main(String[] args) {
        ShoppingMall mall = new ShoppingMall();
        Scanner scanner = new Scanner(System.in);

        // 제품 등록
        mall.addProduct("T-shirt", "top", "Cotton T-shirt", "tshirt.jpg");
        mall.addProduct("Jeans", "btm", "Blue Jeans", "jeans.jpg");
        mall.addProduct("Notebook", "other", "Blank Notebook", "notebook.jpg");

        // 홈페이지 첫 화면
        System.out.println("Welcome to Our Shopping Mall!");
        System.out.println("Categories: all, top, btm, other");

        // 카테고리별 상품 목록 출력
        System.out.println("Select a category to view products:");
        String selectedCategory = scanner.nextLine();
        mall.showProductsByCategory(selectedCategory);

        // 상세 페이지 표시
        System.out.println("Enter the product name for more details:");
        String productName = scanner.nextLine();
        mall.showProductDetails(productName);
    }
}
