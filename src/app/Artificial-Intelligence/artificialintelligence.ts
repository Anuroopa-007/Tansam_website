import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector:'app-artificialintelligence',
  imports:[CommonModule],
  standalone:true,
  templateUrl:'./artificialintelligence.html',
  styleUrl:'./artificialintelligence.css'
})
export class ArtificialIntelligence{
  steps = [
    // --- PHASE A ---
    {
      id: 'A1',
      phase: 'A',
      icon: 'search',
      title: 'Problem Definition',
      detailTitle: 'Problem Definition:',
      detailHead: '',
      details: [
        'The first step in machine learning is to define the problem clearly. ',
        'You must identify whether it is a classification, regression, or clustering task and set specific objectives such as predicting outcomes or finding patterns. '
      ],
      note: '',
      sampleLink: { text: '', url: '#' },
      tools: []
    },
    {
      id: 'A2',
      phase: 'A',
      icon: 'design_services',
      title: 'Data Collection',
      detailTitle: 'Data Collection:',
      detailHead: '',
      details: [
        'In this step, relevant and sufficient raw data is gathered from multiple sources such as databases, sensors, APIs, or spreadsheets. ',
        ' Both structured and unstructured data may be collected depending on the problem. Organizing and storing the data in a usable format is crucial for further processing.'
      ],
      note: '',
      sampleLink: {
        text: '',
        url1: '',
        url2: ''
      },
      tools: []
    },
    {
      id: 'A3',
      phase: 'A',
      icon: 'timer',
      title: 'Data Preprocessing',
      detailTitle: 'Data Preprocessing:',
      details: [
        'Raw data is often messy and requires cleaning to ensure quality. This includes handling missing values, removing duplicates, fixing inconsistencies, and detecting outliers. Numerical features are normalized or scaled, and categorical values are encoded for model compatibility. ',
        'The dataset is then split into training, validation, and testing sets to prepare it for model building.'
      ],
      note: '',
      sampleLink: {},
      tools: []
    },
    {
      id: 'A4',
      phase: 'A',
      icon: 'timer',
      title: 'Feature Engineering',
      detailTitle: 'Feature Engineering:',
      details: [
        'Feature engineering focuses on selecting and improving the attributes used by the model. This may involve creating new features by transforming or combining existing data points. ',
        'Dimensionality reduction methods like PCA can be applied if the dataset is too large. The goal is to ensure that the features capture meaningful relationships that improve the model’s performance.'
      ],
      note: '',
      sampleLink: {},
      tools: []
    },
    {
      id: 'A5',
      phase: 'A',
      icon: 'timer',
      title: 'Model Selection & Training',
      detailTitle: 'Model Selection & Training:',
      details: [
        'Once features are ready, suitable algorithms are chosen based on the problem type. Baseline models are trained first to establish a performance benchmark, followed by more advanced models like decision trees, SVMs, or deep learning networks. The training process adjusts parameters to minimize error and improve prediction accuracy. Hyperparameters are fine-tuned using validation data to optimize the model further. ',
        'The final step of Phase A involves testing the trained model on unseen test data. Evaluation is performed using metrics such as accuracy, F1-score, confusion matrix, or RMSE, depending on the problem. The results are compared against baseline models or industry benchmarks to ensure effectiveness. If the model meets the objectives, it is ready to move toward deployment.'
      ],
      note: '',
      sampleLink: {},
      tools: []
    },
    // --- PHASE B ---
    {
      id: 'B1',
      phase: 'B',
      icon: 'code',
      title: 'Deployment',
      detailTitle: 'Deployment',
      details: [
        'Once the model is validated, it is integrated into real-world applications or systems.',
        'This could be through APIs, web apps, mobile apps, or embedded devices depending on the use case. ',
        'The deployment ensures that predictions are available for end-users or automated processes. Proper testing in the production environment is essential before full-scale rollout.'
      ],
      note: '',
      sampleLink: {},
      tools: []
    },
    {
      id: 'B2',
      phase: 'B',
      icon: 'bug_report',
      title: 'Monitoring',
      detailTitle: 'Monitoring',
      details: [
        'After deployment, continuous monitoring of the model is crucial to check its real-time performance. This involves tracking prediction accuracy, response time, and system reliability under actual conditions. ',
        'Monitoring helps in detecting issues such as performance degradation or unexpected biases. Alerts and logs are set up to flag when the model drifts away from expected results.'
      ],
      note: '',
      sampleLink: {},
      tools: []
    },
    {
      id: 'B3',
      phase: 'B',
      icon: 'cloud_upload',
      title: 'Maintenance',
      detailTitle: 'Maintenance:',
      details: [
        'As real-world data changes, the model’s accuracy may decline over time due to concept drift. Regular maintenance involves retraining the model with updated datasets or fine-tuning hyperparameters. ',
        'Maintenance also includes fixing bugs, updating libraries, and ensuring compatibility with new environments. This process helps the model stay relevant and reliable in long-term use.'
      ],
      note: '',
      sampleLink: {},
      tools: []
    },
    {
      id: 'B4',
      phase: 'B',
      icon: 'assessment',
      title: 'Scaling',
      detailTitle: 'Scaling:',
      details: [
        'When the system grows to handle larger datasets or a higher number of users, scaling becomes necessary. This can involve optimizing the infrastructure using cloud services, distributed computing, or containerization. ',
        ' Load balancing and efficient resource allocation ensure smooth performance under heavy demand. ',
        'Scaling guarantees that the model remains fast, efficient, and accessible as usage increases.'
      ],
      note: '',
      sampleLink: {},
      tools: ['']
    },

  ];

  activeStepIdx = 0;

  selectStep(idx: number) {
    this.activeStepIdx = idx;
  }

  get activeStep() {
    return this.steps[this.activeStepIdx];
  }

  get phaseA() { return this.steps.filter(s => s.phase === 'A'); }
  get phaseB() { return this.steps.filter(s => s.phase === 'B'); }
}