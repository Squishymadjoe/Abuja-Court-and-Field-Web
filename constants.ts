import { Episode, Host } from './types';

export const EPISODES: Episode[] = [
  {
    id: '42',
    title: 'The Rise of Flag Football in Gwarinpa',
    description: 'We sit down with the league commissioner to discuss the explosive growth of flag football leagues in the Gwarinpa district and what it means for youth development.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6E4mHEPDnJnipS8pOMqhbzQFtRRKAuMVySJF8XDZTipIzbNNZoQ7dwnBVj47wtpWDlP9qHuLOo939ygdRzwTtvHt-fPmbzulhkscDrpFT4n7q7o2202Rgc2lMaUp7fGtvf0X1vr_-I28ymhM58OZOfEKufGURCksxWKm3wBE3jxsSU877arUCfkWKxgr9Tng6ta5wuIAR1grtQZC1nN3rdiGByWMIMjYLQaZCXzzCrb5iySLAK_AdzSQFjVLW8nS_k3cKgI8_TC7G',
    duration: '45m',
    episodeNumber: '42',
    date: 'Oct 12, 2023',
    category: 'Flag Football'
  },
  {
    id: '41',
    title: 'Courtside with the Abuja City Chiefs',
    description: 'An exclusive interview with the starting five of the Abuja City Chiefs. We talk strategy, the upcoming season, and the pressure of defending the title.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmRJSbxbPPyAoxfGaK97ZOHWvzIDOeC1_kFcofEG0uAjiZkHmU4kfd-nfcxzY7BrtIsn6qAJGnD700Y-eRTM04fXHhlpuVmONVmDV35b1J89flx0c2n8mj7VHRRtOO1_LiQjwszRmaptbhgBE0VsyhB0XtTAwpn2fir7_PudLzZpG3192d4iv2k3xiGEsQIWYawbQJIx_CGF_5bQWIa_LDrRLx6-e1308JRhGPxQwHzczOZIIjwPa7OGL23ibFbFCGwHmHmsLUVC6n',
    duration: '52m',
    episodeNumber: '41',
    date: 'Oct 05, 2023',
    category: 'Basketball'
  },
  {
    id: '40',
    title: 'Pickup Games & Politics',
    description: 'How local pickup games are influencing community decisions and bringing diverse neighborhoods together in unexpected ways.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLjC9LdVYyKWefowklKLkG-Z1t2Mz7LDeHZaElhn4qa6LgugYCmm7tUkTkoLJc4lTAG5TRGkr24S8q3aE-KLbVBArrmqjyq-wTF-epMSHRcdzfOPlxcjKGkHJLqpYIizDf2tqgI6Gi5o23pMMAW_5e6ghE8ECXeReLlxwT2RcC0zbcsr68QTwtploFauP9zX-mPiINJ-uJegF-yIQ18IaXcIGqRw3C4rJ3yx1Pnr2ECcPupKecWaiu8gfQtIsR-JXB7bBVLySzNoLv',
    duration: '38m',
    episodeNumber: '40',
    date: 'Sept 28, 2023',
    category: 'Culture'
  },
  {
    id: '39',
    title: 'Streetball Legends of Wuse',
    description: 'We track down the legendary players of Wuse Zone 5 who never went pro but became local heroes through their unmatched skill on the asphalt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeugeNPEAWE_jW3m2bQ9mWfa14pLDWsin_iMVx8jLvS9BFX_wHcftLcYsqBDs9j-6V87NdcnmMBoF6SpmJUnppq2zYEYSaY0sNusYuYQc_7RQGQtYFGDZnrMSudyCwYOBOj29i_oEYLkwYy17lrt77YzmvFzIXT8qULggWa4wD_JW3mWfC24K2WcPZdZWhEe9fJlHtGMv1pD-Bw_SQHbx_X6tYF2WW34FFacs0aWAuvertgx-u_YgRRuD6r-is7W0-xLpkuL8gVDGl',
    duration: '60m',
    episodeNumber: '39',
    date: 'Sept 21, 2023',
    category: 'Streetball'
  },
  {
    id: '38',
    title: 'The National League Recap',
    description: 'A complete breakdown of the latest national league standings, surprise upsets, and players to watch for the playoffs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGdKxUNxaNxKtuJQ2-GZ4CHY_4-d15P4G4oHUcdnDE43hpqwF6pe-ZcCIERjpOvOKlhDkwvNAW1NSzCvZKyezLijUIwmF5kGZCFzYbWlVmIPn-i7M1JUrF041_RuCGx3yqC0tfI04N7ceid2jsWmj7ozoRaDNmGhcGa_dK_CTT9JmVgBk63GcllTNNXVnaLr2d6IrsaL4ICLpbJLvTo2L3pdfk9ke9zTsIJWMIyDbBKHOrcc2gX4stq3f0wVdSgDZ7NgaDwYgv2Hg9',
    duration: '48m',
    episodeNumber: '38',
    date: 'Sept 14, 2023',
    category: 'League Update'
  },
  {
    id: '37',
    title: 'Training Day with Coach Emeka',
    description: 'Coach Emeka shares his philosophy on discipline, mental toughness, and what it takes to transform amateur talent into professional skill.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTrjRo7eKzdrbszd20zRwzigSYMHQObo1ZZzlYzB8g7VFjgNteECIOrmr2mtf2bZyoLoyAQR_cCex4zFwazxmmoR8JC89HHNf76tIiw_G7RITjgNxRpW2amV9EmD_rQNIwE8D5EAId6KK-jpg998JfDVsv5YSBffcbtVhhEwAl3JjFQR9H1RPfyJ_N3dN_wPDIbFWYf_b5JeEgUwj6lF0EqFn_3SMStXWAf8yKe8_EdtoyItfGpxcqwov5NSaQKSfhxYmo_iQ8PLgX',
    duration: '55m',
    episodeNumber: '37',
    date: 'Sept 07, 2023',
    category: 'Training'
  }
];

export const HOSTS: Host[] = [
  {
    name: 'Chidi "The Hoops" Okonjo',
    role: 'Lead Anchor & Analyst',
    bio: 'A former university point guard with an obsession for stats and underdog stories. Chidi has spent the last decade documenting the rise of streetball in Wuse Zone 5.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXsve2x2ap8zU26tbym1fM1ef7xy9Pk6DY60SwKLAWR8oFjp5zxmeqMA6cwFmqx0nEUnDjb3sA8fLvfLSCWKyR9nvBxUzwMVyLkKIgUN2zzvYm4IgNeLix19Ti1fz_wRZC2aedBt4tdICjM2EdK7J9647Dhankq9Nhn3boAUE0H0z1MrJkaZFCPWRMj4PhwTmhoQ4HdoE4tEdkxYa6jhkNUHrtiUOfDxIQjZtToEWqSgu15CcWl_CGONtV2_IvfYa9O2tmGeMEOzjH',
    socials: { twitter: '@chidihoops' }
  },
  {
    name: 'Amina Yusuf',
    role: 'Co-Host & Field Reporter',
    bio: 'From flag football championships to local charity leagues, Amina is always on the sidelines. Her passion lies in the culture surrounding the game.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCIjYQn2dFRpJ6P0pHy-alyHEhPHDG-wB-3a1HhYmbbf75cJtEcbefkjZiU68gjairpMrhBRWMcDiOJc664mrflTFtOEjDUvSV1jStyal1ugdBHR2TPbx0U-qO3e3aQBdajpwkvtNynt--Z6PoVezYE0tNDFJdsmu2Zc_zj8Vfa3EgfWMxu2ZS2tKZX-aZPIrU5X-swVTfAYVXFLMETc3m3XjPB2tquan7vFHWmPyuVTRmKdjTd2s6ujRkK8lECDd0lgkKlNm2pYlh',
    socials: { instagram: '@aminasports' }
  }
];