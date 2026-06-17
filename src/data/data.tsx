import {
  AcademicCapIcon,
  DocumentTextIcon, // Notion 대용 아이콘 추가
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon'; // Instagram 아이콘 추가
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Donghun Kim - Portfolio',
  description: 'Portfolio website of Donghun Kim',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Donghun Kim.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        안녕하세요, 컴퓨터공학을 전공하며 다양한 아이디어를 직접 코드로 구현해 보는 것을 즐기는 <strong className="text-stone-100">김동훈</strong>입니다. 
        특정 분야에 갇히지 않고 프론트엔드(React, Vue)부터 백엔드(Spring Boot, MySQL)까지 넓은 방면의 기술 스택을 두루 공부해 왔습니다.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        공공데이터 공모전에 참여한 경험을 비롯해 국궁 기록 앱, 웹 서비스 등 여러 프로젝트를 직접 만들어 보며 서비스의 전체적인 개발 흐름을 익혔습니다.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Portfolio}`,
      text: 'View Projects',
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `새로운 기술을 배우고 적용하는 것을 즐기며, 동아리 회장과 공모전 등 다양한 팀 프로젝트를 통해 소통과 협업의 가치를 배웠습니다. 탄탄한 컴퓨터 공학 지식을 바탕으로 지속적으로 성장하는 개발자가 되고자 합니다.`,
  aboutItems: [
    {label: 'Location', text: 'Jeonju, South Korea', Icon: MapIcon},
    {label: 'Study', text: 'Jeonbuk National University', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Web/App Development, Archery(국궁)', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Java', level: 4 },
      { name: 'C/C++', level: 5 },
      { name: 'Python', level: 2 },
      { name: 'TypeScript', level: 3 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Vue', level: 3 },
      { name: 'HTML/CSS', level: 5 },
    ],
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Spring Boot', level: 4 },
      { name: 'MySQL', level: 3 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '수집형 스탬프 관광 (다녀감)',
    description: '관광 데이터를 활용한 GPS 기반의 국내 여행지 수집형 스탬프 투어 서비스입니다.',
    url: 'https://github.com/donghun712/danyeogam.git', 
    image: porfolioImage1, 
  },
  {
    title: '국궁 기록 애플리케이션 B-Log',
    description: '국궁인들의 꾸준한 기록 및 랭킹, 통계 시스템을 지원하는 애플리케이션입니다. ',
    url: 'https://github.com/donghun712',
    image: porfolioImage2,
  },
  {
    title: '3분세끼',
    description: '메뉴 선정에 어려움을 겪는 사용자를 위한 초간단 메뉴 추천 애플리케이션입니다.',
    url: 'https://github.com/donghun712/3min',
    image: porfolioImage3,
  },
  {
    title: 'Skin-MBTI',
    description: 'MBTI기반의 지문으로 빠르고 간단하게 본인의 피부 유형을 검사할 수 있게 해주는 서비스입니다.',
    url: 'https://github.com/donghun712/skin-mbti',
    image: porfolioImage4,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2021.03 - 재학 중',
    location: '전북대학교',
    title: '컴퓨터 인공지능학부',
    content: <p>자료구조, 알고리즘, 운영체제, 데이터베이스 등 컴퓨터 공학 핵심 전공 지식을 학습하고 다양한 프로젝트를 수행했습니다.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024.03 - 2024.08',
    location: '전북대학교 중앙동아리 활빈',
    title: '부회장',
    content: (
      <p>
        동아리 내부 행사 기획 및 부원들과의 원활한 소통을 담당하며 팀워크를 다졌습니다.
      </p>
    ),
  },
  {
    date: '2024.08 - 2025.02',
    location: '전북대학교 중앙동아리 활빈',
    title: '회장',
    content: (
      <p>
        동아리 대표로서 부원들을 이끌고 훈련 일정 및 예산을 관리, 외부 조직과의 협업을 통해 조직 운영과 리더십 경험을 쌓았습니다.
      </p>
    ),
  },
  {
    date: '2026', 
    location: '관광데이터 활용 공모전',
    title: '프로젝트 팀장 / 기획 및 개발 총괄',
    content: (
      <p>
        공공데이터를 활용한 '수집형 스탬프 관광' 아이디어로 공모전에 참가하여 실무적인 기획 및 개발 프로세스를 경험했습니다.
      </p>
    ),
  },
];


/**
 * Contact section (연락처 카드 섹션)
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '협업 제안이나 궁금한 점이 있으시다면 언제든 편하게 연락해 주세요.',
  items: [
    {
      type: ContactType.Email,
      text: 'nkdonghun712@gmail.com',
      href: 'mailto:nkdonghun712@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jeonju, South Korea',
      href: 'https://www.google.com/maps/place/Jeonju-si',
    },
    {
      type: ContactType.Github,
      text: 'donghun712',
      href: 'https://github.com/donghun712',
    },
    {
      type: ContactType.Instagram,
      text: '@donghun712',
      href: 'https://www.instagram.com/donghun712/',
    },
  ],
};

/**
 * Social items (하단 푸터 소셜 아이콘 버튼들)
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/donghun712'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/donghun712/'},
  {label: 'Notion', Icon: DocumentTextIcon, href: 'https://quaint-zebu-933.notion.site/portfolio_test-382c89da6384800fbd18c3941c3d6423'},
];