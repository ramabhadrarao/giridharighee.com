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
    image: '/img/1L.png',
  },
  {
    id: 4,
    name: 'Pure Ghee',
    size: '500 ml',
    image: '/img/500ml.png',
  },
  {
    id: 5,
    name: 'Pure Ghee',
    size: '200 ml',
    image: '/img/200ml Pack.png',
  },
  {
    id: 6,
    name: 'Cow Ghee',
    size: '500ml, 1L',
    image: '/img/cowghee.png',
  },
  {
    id: 7,
    name: 'Bulk Ghee',
    size: 'Custom Packing',
    image: '/img/All.png',
  },
];

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="products-grid"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="product-card"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="product-image"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                />
              </motion.div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-size">{product.size}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}