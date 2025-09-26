import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPen, faBullseye, faFolderOpen, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';  // or '@angular/platform-browser'

@Component({
  selector: 'app-artificialintelligence',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './artificialintelligence.html',
  styleUrls: ['./artificialintelligence.css']
})
export class ArtificialIntelligence {
steps = [
  {
    title: 'Problem Statement',
    desc: 'Define the goal clearly (classification, regression, clustering).',
    tools: ['Whiteboard', 'Google Docs', 'Miro'],
    icon: faPen
  },
  {
    title: 'Data Collection',
    desc: 'Gather from databases, APIs, sensors, CSV, web scraping.',
    tools: ['SQL', 'Python (Pandas, Requests, BeautifulSoup)', 'Kaggle Datasets'],
    icon: faFolderOpen
  },
  {
    title: 'Data Preprocessing',
    desc: 'Handle missing values, duplicates, outliers, scaling.',
    tools: ['Python (Pandas, NumPy, Scikit-learn)', 'Excel'],
    icon: faCog
  },
  {
    title: 'Exploratory Data Analysis (EDA)',
    desc: 'Summarize & visualize data patterns.',
    tools: ['Matplotlib', 'Seaborn', 'Plotly', 'Pandas Profiling', 'Tableau', 'Power BI'],
    icon: faBullseye
  },
  {
    title: 'Feature Engineering',
    desc: 'Encoding, scaling, feature extraction/selection.',
    tools: ['Scikit-learn', 'Featuretools', 'Python scripts'],
    icon: faCog
  },
  {
    title: 'Model Selection',
    desc: 'Pick algorithms based on task & data.',
    tools: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM'],
    icon: faBullseye
  },
  {
    title: 'Model Training',
    desc: 'Train chosen model on training data.',
    tools: ['Scikit-learn', 'TensorFlow/Keras', 'PyTorch', 'MLflow'],
    icon: faCog
  },
  {
    title: 'Model Evaluation',
    desc: 'Use metrics (accuracy, F1, RMSE, ROC-AUC).',
    tools: ['Scikit-learn (metrics)', 'Yellowbrick', 'TensorBoard'],
    icon: faCheckCircle
  },
  {
    title: 'Model Fine-Tuning',
    desc: 'Hyperparameter optimization.',
    tools: ['GridSearchCV', 'RandomizedSearchCV', 'Optuna', 'Hyperopt'],
    icon: faCog
  },
  {
    title: 'Model Testing / Prediction',
    desc: 'Validate on test set, generate predictions.',
    tools: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'ONNX'],
    icon: faCheckCircle
  },
  {
    title: 'Refinement & Monitoring',
    desc: 'Deploy, monitor drift, update model.',
    tools: ['Flask/FastAPI', 'Docker', 'MLflow', 'Airflow', 'Prometheus', 'Grafana'],
    icon: faCog
  }
];


  constructor(library: FaIconLibrary) {
    library.addIcons(faPen, faBullseye, faFolderOpen, faCog, faCheckCircle);
  }
}
