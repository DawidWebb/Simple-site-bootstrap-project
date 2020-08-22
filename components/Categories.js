class Categories {
  constructor() {
    this.categories = [...document.querySelectorAll("#categories")];
    this.categories.forEach((category) => {
      category.addEventListener("click", this.selectCategory.bind(this));
    });
    this.klass = [...document.querySelectorAll("#klass")];
  }
  selectCategory(e) {
    let index = this.categories.indexOf(e.target);
    if (index === 0) {
      this.categories.forEach((item) => item.classList.remove("active"));
      this.categories[index].classList.add("active");
      this.klass.forEach((item) => (item.style.display = "none"));
      this.klass[index].style.display = "block";
    } else if (index === 1) {
      this.categories.forEach((item) => item.classList.remove("active"));
      this.categories[index].classList.add("active");
      this.klass.forEach((item) => (item.style.display = "none"));
      this.klass[index].style.display = "block";
    } else if (index === 2) {
      this.categories.forEach((item) => item.classList.remove("active"));
      this.categories[index].classList.add("active");
    } else if (index === 3) {
      this.categories.forEach((item) => item.classList.remove("active"));
      this.categories[index].classList.add("active");
    }
    console.log(index);
  }
}
export default Categories;
