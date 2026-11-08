export const projects = [
  {
    id: 'urbaneye',
    title: 'UrbanEye - AI-Based Urban Encroachment Detection',
    category: 'Computer Vision',
    description:
      'An AI-based system for detecting changes and potential land encroachment using multi-temporal satellite imagery and change detection.',
    problem:
      'Tracking land-use changes over time from satellite imagery to identify spatial differences and support urban monitoring.',
    techStack: ['Python', 'PyTorch', 'Computer Vision', 'CNN', 'Satellite Imagery', 'GIS', 'QGIS'],
    contribution:
      'Developing a final-year engineering project that preprocesses multi-temporal imagery, aligns image patches, creates binary change masks, and applies deep-learning-based change detection through a web-based visualization workflow.',
    github: 'https://github.com/Shye23/urbaneye-encroachment-detection',
    demo: '#',
    result: 'Final-year engineering project in development',
  },
  {
    id: 'genoscope',
    title: 'GenoScope - Genetic Variant Analysis & Prediction',
    category: 'AI/ML',
    description:
      'A machine-learning-based platform for analyzing genetic variants and predicting clinically relevant patterns.',
    problem:
      'Understanding variant patterns from biological datasets and building predictive models for clinically relevant outcomes.',
    techStack: ['Python', 'FastAPI', 'Biopython', 'Pandas', 'Scikit-learn', 'XGBoost', 'ClinVar', 'NCBI'],
    contribution:
      'Implemented data processing, feature preparation, and model experimentation for variant analysis using a combination of biological data and machine-learning pipelines.',
    github: 'https://github.com/Shye23/GenoScope.git',
    demo: '#',
    result: 'Sickle-cell related prediction: approximately 96.25% accuracy; breast cancer related prediction using XGBoost: approximately 88.53% accuracy.',
  },
  {
    id: 'aarogyakosh',
    title: 'AarogyaKosh - Clinical Trial Query Platform',
    category: 'Backend',
    description:
      'A platform for querying clinical trial information using natural-language queries.',
    problem:
      'Making structured clinical trial data easier to explore using a natural-language interface for research and information retrieval.',
    techStack: ['FastAPI', 'LangChain', 'Python'],
    contribution:
      'Processed structured clinical trial data into a queryable system that supports natural-language questions over trial information.',
    github: 'https://github.com/Shye23/next-clinical-ops-ai.git',
    demo: '#',
    result: 'Clinical trial data made queryable through a natural-language interface.',
  },
  {
    id: 'yukti-sutra',
    title: 'Yukti Sutra',
    category: 'Backend',
    description:
      'A Flask-based application demonstrating practical web application development and backend integration.',
    problem:
      'Building a straightforward backend-driven web application for learning and demonstrating practical development workflows.',
    techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    contribution:
      'Built a Flask application to demonstrate backend logic, application structure, and web integration.',
    github: 'https://github.com/Shye23/yukti-sutra.git',
    demo: '#',
    result: 'Project evaluation score: 95%',
  },
  {
    id: 'cnn-classification',
    title: 'Image Classification using CNN',
    category: 'Computer Vision',
    description:
      'A computer vision project using a convolutional neural network for image classification.',
    problem:
      'Building an image classification model to classify visual input using deep-learning techniques.',
    techStack: ['Python', 'PyTorch', 'CNN', 'ResNet', 'Computer Vision'],
    contribution:
      'Experimented with CNN-based architectures and evaluated model performance on validation data.',
    github: 'https://github.com/Shye23/img-classification-cnn.git',
    demo: '#',
    result: 'Validation accuracy: 88.9%.',
  },
];

export const projectFilters = ['All', 'AI/ML', 'Computer Vision', 'Backend', 'Data Science'];
