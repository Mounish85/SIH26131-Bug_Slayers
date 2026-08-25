export const diseases = [
  {
    id: 1,
    crop: 'Tomato',
    disease: 'Tomato Early Blight',
    confidence: 94,
    severity: 'High',
    symptoms: ['Brown spots on older leaves', 'Yellowing around spots', 'Stem lesions'],
    recommendations: ['Remove infected leaves', 'Apply copper-based fungicide', 'Improve air circulation'],
    preventiveMeasures: ['Crop rotation', 'Proper spacing', 'Avoid overhead watering']
  },
  {
    id: 2,
    crop: 'Rice',
    disease: 'Rice Blast',
    confidence: 88,
    severity: 'High',
    symptoms: ['Diamond-shaped white to gray lesions', 'Stunted growth', 'Neck rot'],
    recommendations: ['Apply systemic fungicides', 'Drain field temporarily'],
    preventiveMeasures: ['Plant resistant varieties', 'Avoid excessive nitrogen']
  },
  {
    id: 3,
    crop: 'Wheat',
    disease: 'Leaf Rust',
    confidence: 91,
    severity: 'Medium',
    symptoms: ['Small brown pustules on leaves', 'Premature leaf death'],
    recommendations: ['Apply foliar fungicides', 'Monitor weather conditions'],
    preventiveMeasures: ['Use resistant varieties', 'Early planting']
  }
];