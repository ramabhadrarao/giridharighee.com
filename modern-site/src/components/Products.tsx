import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Pure Ghee',
    size: '15 Kg',
    image: '/img/newproduct4.png',
  },
  {
    id: 2,
    name: 'Cow Ghee',
    size: '15 Kg',
    image: '/img/newproduct3.png',
  },
  {
    id: 3,
    name: 'Pure Ghee',
    size: '1 Litre',
    image: '/img/newproduct2.png',
  },
  {
    id: 4,
    name: 'Cow Ghee',
    size: '500 ml',
    image: '/img/newproduct1.png',
  },
  {
    id: 5,
    name: 'Pure Ghee',
    size: '500 ml',
    image: '/img/newproduct2.png',
  },
  {
    id: 6,
    name: 'Cow Ghee',
    size: '1000 ml',
    image: '/img/newproduct1.png',
  },
  {
    id: 7,
    name: 'Ghee',
    size: '1 Litre',
    image: '/img/1L.png',
  },
  {
    id: 8,
    name: 'Ghee',
    size: '500 ml',
    image: '/img/500ml.png',
  },
  {
    id: 9,
    name: 'Ghee',
    size: '100ml, 200ml',
    image: '/img/200ml Pack.png',
  },
  {
    id: 10,
    name: 'Bulk Ghee',
    size: 'Custom Packing',
    image: '/img/All.png',
  },
  {
    id: 11,
    name: 'Cow Ghee',
    size: '500ml, 1L',
    image: '/img/cowghee.png',
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Our Products</h2>
          <p>Premium quality ghee made from organic grass-fed cows</p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card"
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-size">{product.size}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
