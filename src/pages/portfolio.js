import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, GridAuto } from "../components/layoutComponents"
import BannerBasic from "../components/banners/bannerBasic"
import TestimonialCard from "../components/testimonials/testimonialCard"
import GalleryFull from "../components/gallery/galleryFull"
import TestimonialsFull from "../components/testimonials/testimonialsFull"
import Clients from "../components/clients"
import FormContact from "../components/forms/formContact"
import GoogleReviewsFeatured from "../components/testimonials/GoogleReviewsFeatured"

import BannerBasicImg from "../images/ph.png"

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <BannerBasic title="Websites that drive results" img={BannerBasicImg} />
      <GalleryFull />
      <GoogleReviewsFeatured />
      <Clients />
      <FormContact />
    </Layout>
  )
}
