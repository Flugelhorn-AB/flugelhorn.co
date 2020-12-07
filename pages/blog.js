import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import BlogGallery from '../components/BlogGallery';
import Footer from '../components/Footer';
import Head from '../components/head';
import Navigation from '../components/Navigation';
import { url, fetcher } from '../utils/fetcher';
import style from './style/blog.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = ({ articles }) => {
     const [randomColor, setRandomColor] = useState('');
     const colorArray = [
          '#1A1334',
          '#27294A',
          '#03545A',
          '#027350',
          '#07C283',
          '#ABD961',
          '#FCBF45',
          '#EF6B32',
          '#ED0445',
          '#A12A5E',
          '#710162',
          '#710162',
          '#022C7D',
     ];

     useEffect(() => {
          setRandomColor(
               colorArray[Math.floor(Math.random() * colorArray.length)]
          );
     }, []);

     return (
          <div className={style.blog}>
               <Head
                    title="Blog | Flugelhorn Digital Web Agency"
                    description="
        Read our latest articles about web, design and travel. Learn the latest within web development and graphic design."
               />

               <AnimatePresence exitBeforeEnter>
                    <motion.div
                         style={{ width: '100%' }}
                         transition={{ duration: 0.5 }}
                         exit={{ backgroundColor: 'white', opacity: 0 }}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                    >
                         <div
                              style={{ backgroundColor: randomColor }}
                              className={style.navigationUnderlay}
                         />
                         <Navigation />
                         <BlogGallery articles={articles} />
                         {/* <div className={style.posts}>
        <div className={style.col}>
        {posts.map((post, i) => {
          return <BlogCard details={post} key={i} />;
        })}
        </div>
        <div className={style.col}>
        {posts.map((post, i) => {
          return <BlogCard details={post} key={i} />;
        })}
        </div>
      </div> */}
                         <Footer />
                    </motion.div>
               </AnimatePresence>
          </div>
     );
};
export const getStaticProps = async () => {
     const articles = await fetcher(`${url}/articles`);

     return { props: { articles } };
};

export default Blog;
