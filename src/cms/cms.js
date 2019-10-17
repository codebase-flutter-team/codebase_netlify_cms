import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import './styles.js'

// import PricingPagePreview from './preview-templates/PricingPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ContactPagePreview from './preview-templates/ContactPagePreview' 
// import BlogPagePreview from './preview-templates/BlogPageTemplate'
// import ProcessPagePreview from './preview-templates/ProcessPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
// CMS.registerPreviewTemplate('process', ProcessPagePreview);
// CMS.registerPreviewTemplate('blog',  BlogPagePreview);
// CMS.registerPreviewTemplate('pricing',  PricingPagePreview);
// CMS.registerPreviewTemplate('Contact',  ContactPagePreview);



// CMS.registerPreviewTemplate('blog', BlogPostPreview)
