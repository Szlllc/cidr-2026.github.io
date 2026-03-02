import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, Zap, Target, Star, User, Building2, Tag, ExternalLink, Menu, X, HelpCircle, Lightbulb, ChevronRight, GripVertical, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { sessions, expressPapers, deepDivePapers } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(288); // Default w-72 is 288px
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Navigation items structure
  interface NavItem {
    id: string;
    label: string;
    icon?: React.ElementType;
    isSub?: boolean;
    isDeepDiveSub?: boolean;
  }

  const navItems: NavItem[] = [
    { id: 'hero', label: '卷首语', icon: BookOpen },
    { id: 'express', label: 'Part1：论文速递', icon: Zap },
    ...sessions.map(s => ({ id: s.id, label: s.title, isSub: true })),
    { id: 'deep-dive', label: 'Part2：深度解读', icon: Target },
    ...deepDivePapers.map(p => ({ id: p.id, label: p.title, isSub: true, isDeepDiveSub: true })),
  ];

  // Intersection Observer to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Resizable Sidebar Logic
  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        const newWidth = mouseMoveEvent.clientX;
        if (newWidth >= 240 && newWidth <= 480) { // Min 240px, Max 480px
          setSidebarWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-slate-900 selection:bg-blue-200">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0B1120] border-b border-slate-800 z-50 flex items-center justify-between px-4">
        <span className="font-serif font-bold text-lg text-white tracking-widest">CIDR 2026</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 1024) && (
          <motion.nav
            ref={sidebarRef}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            style={{ width: window.innerWidth >= 1024 ? sidebarWidth : '100%' }}
            className={`fixed top-16 lg:top-0 left-0 bottom-0 bg-white border-r border-slate-200 z-40 shadow-xl lg:shadow-none flex flex-col ${isMobileMenuOpen ? 'w-72' : ''}`}
          >
            <div className="p-8 hidden lg:block border-b border-slate-100 flex-shrink-0">
              <h1 className="text-2xl font-serif font-black tracking-widest text-slate-900 leading-tight">
                CIDR 2026<br/>
                <span className="text-blue-700 text-lg tracking-normal font-sans font-bold">数据库顶会专刊</span>
              </h1>
            </div>
            
            <div className="px-4 py-6 overflow-y-auto overflow-x-hidden custom-scrollbar flex-1">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const isSub = item.isSub;
                  const isDeepDiveSub = item.isDeepDiveSub;
                  
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 flex items-center gap-3
                          ${isSub ? 'ml-6 pl-4 border-l-2 text-xs' : 'font-bold tracking-wide'}
                          ${isDeepDiveSub ? 'ml-6 pl-4 border-l-2 text-xs text-slate-500' : ''}
                          ${isActive 
                            ? (isSub ? 'border-blue-600 text-blue-700 bg-blue-50/50 font-semibold' : 'bg-slate-900 text-white') 
                            : (isSub ? 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-800' : 'text-slate-700 hover:bg-slate-100')
                          }
                        `}
                      >
                        {!isSub && item.icon && <item.icon size={16} className={isActive ? 'text-blue-400' : 'text-slate-400'} />}
                        <span className="truncate">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Drag Handle */}
            <div
              className="hidden lg:flex absolute top-0 right-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-400 transition-colors items-center justify-center group z-50"
              onMouseDown={startResizing}
            >
              <div className="h-8 w-1 bg-slate-300 rounded-full group-hover:bg-blue-500 transition-colors"></div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main 
        className="pt-16 lg:pt-0 transition-[margin] duration-75 ease-out"
        style={{ marginLeft: window.innerWidth >= 1024 ? sidebarWidth : 0 }}
      >
        
        {/* Dark Header Background for Hero */}
        <div className="bg-[#0B1120] pt-20 pb-48 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-blue-500 blur-[120px]"></div>
            <div className="absolute top-[40%] -left-[10%] w-[40%] h-[60%] rounded-full bg-indigo-500 blur-[100px]"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-block border-b border-slate-600 pb-2 mb-4">
              <p className="text-slate-400 tracking-[0.2em] text-sm uppercase font-medium font-sans">
                Ding Hui Zhuan Kan | 2026 年 3 月 3 日
              </p>
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif font-black text-white tracking-wider">
              数据库顶会专刊
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 mb-8"></div>
            <p className="text-3xl text-slate-300 font-light tracking-wide font-sans">
              CIDR 2026
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pb-24 -mt-32 relative z-20 space-y-16">
          
          {/* Part 1: Hero & Introduction (Card) */}
          <section id="hero" className="scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 sm:p-12 lg:p-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              <div className="flex justify-between items-end border-b border-slate-200 pb-6 mb-10">
                <h2 className="text-4xl font-serif font-bold text-slate-900 tracking-wide">卷首语</h2>
                <span className="text-slate-400 font-serif tracking-widest">元宵</span>
              </div>

            <div className="text-slate-700 leading-loose font-serif">
              <div className="mb-12 text-base md:text-lg text-justify">
                <p className="mb-8">
                  <span className="float-left text-6xl md:text-7xl font-serif font-bold text-slate-900 mr-4 mt-1 leading-none drop-shadow-sm">本</span>
                  期专刊带来的是 CIDR 2026 的论文速递与深度解读，涵盖了大语言模型（LLM）与数据库融合、数据平台优化、分布式一致性、SQL 与数据建模、软硬件协同加速等前沿方向。本期共收录 34 篇论文速递及 6 篇深度解读，均来自顶尖高校、主流科技厂商和前沿研究机构。
                </p>
                <p className="text-slate-500 italic border-l-4 border-blue-100 pl-6 py-2 text-base">
                  《CIDR 2026 技术专刊》分为<strong className="text-blue-800 font-bold not-italic">论文速递</strong>与<strong className="text-blue-800 font-bold not-italic">深度解读</strong>两大部分，具体分类情况如下：
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 1: LLMs for Databases</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 5 篇，包括连接大模型与数据库通用工具包（阿里）、多模态数据库（华盛顿大学）、AI 驱动分析引擎（MIT）、LLM 压缩经济学（慕尼黑工大等）、Prompt 视角优化（布朗大学等）。
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 2: Data Platform Benchmarking</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 5 篇，包括多租户 OLTP 架构（Salesforce）、端到端 Serverless 分析（ETH）、工作负载幸存者偏差分析（宾大）、PostgreSQL 向量搜索解耦（普渡大学）、位图过滤器实践（微软等）。
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 3: Text-to-SQL & Agents</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 5 篇，包括 Text-to-SQL 基准测试剖析（UIUC）、优化器验证 LLM 重写（微软）、企业级基准构建系统（TUM等）、智能体数据流安全控制（哥伦比亚大学）、智能体优先架构（UC Berkeley）。
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 4: Distributed Coordination</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 4 篇，包括面向数据的工作流 AC/DC 语义（MIT等）、地理分布式半线性化一致性（KTH等）、多平台众包规制系统（石溪大学等）、分区数据库灵活复制（哥伦比亚大学等）。
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 5: SQL and Data Modeling</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 4 篇，包括 IN 谓词求值优化（慕尼黑工大）、递归查询跨范式编译（爱丁堡大学）、图视图语义数据建模（谷歌）、抽象关系查询语言（东北大学）。
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 6: Data Integration</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 3 篇，包括可视化数据整理（犹他大学等）、数据意图关系化（芝加哥大学）、自治数据代理协作（达姆施塔特工业大学）。
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 7: Memory & I/O</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 4 篇，包括 xNVMe 灵活 I/O 扩展（哥本哈根信息技术大学等）、声明式内存服务（德累斯顿工业大学等）、混合负载 GPU 调度（EPFL等）、云硬件演进追踪（慕尼黑工大）。
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-blue-200 group-hover:w-12 transition-all duration-300"></span>
                      <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm">Session 8: Hardware Acceleration</h3>
                    </div>
                    <p className="text-sm text-slate-600 pl-11 leading-loose">
                      方向论文 4 篇，包括 GPU 原生 SQL 引擎（威斯康星大学等）、光栅化数据库列索引（微软等）、片上 NPU 数据库集成（TU Ilmenau）、哈希连接与 CXL 内存池化（新加坡国立大学等）。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-2 bg-blue-600 text-white rounded-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 uppercase tracking-wider text-sm mb-2">深度解读</h3>
                    <p className="text-sm text-slate-600 leading-loose">
                      精选 6 篇论文进行解读，内容涵盖 PostgreSQL 向量索引解耦、SQL Server 位图过滤、GPU 原生分析加速、Agent-First 数据架构重构、工作流系统持久化一致性，以及 CXL 内存层级调度优化。
                    </p>
                  </div>
                </div>
              </div>
            </div>
              
              <div className="mt-16 pt-8 border-t border-slate-100 flex justify-end">
                <div className="text-right">
                  <p className="font-bold text-slate-900 text-lg tracking-wide font-sans">技术预研部技术组</p>
                  <p className="text-sm text-slate-500 mt-1 font-serif tracking-widest">2026 年 3 月 3 日</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Part 2: Express Delivery */}
          <section id="express" className="scroll-mt-24">
            <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-sm shadow-xl border border-slate-100 relative">

              <div className="mb-16 text-center">
                <h2 className="text-4xl font-serif font-bold tracking-widest text-slate-900 mb-4">
                  Part1：论文速递
                </h2>
                <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-slate-500 tracking-wide font-sans">
                  8 大主题 34 篇文章速递
                </p>
              </div>

              <div className="space-y-24">
                {sessions.map((session) => {
                  const sessionPapers = expressPapers.filter(p => p.sessionId === session.id);
                  
                  return (
                    <div key={session.id} id={session.id} className="scroll-mt-24">
                      <div className="mb-10 bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-sm shadow-sm">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-wide">
                          {session.title}
                        </h3>
                      </div>
                      
                      {sessionPapers.length > 0 ? (
                        <div className="space-y-8">
                          {sessionPapers.map((paper) => (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              key={paper.id} 
                              className="group relative pl-6 sm:pl-10 border-l-2 border-slate-200 hover:border-blue-500 transition-colors duration-300"
                            >
                              {/* Number Indicator */}
                              <div className="absolute -left-[17px] top-0 w-8 h-8 bg-white border-2 border-slate-200 group-hover:border-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors duration-300 font-sans">
                                {paper.id.toString().padStart(2, '0')}
                              </div>
                              
                              <div className="space-y-5">
                                <div>
                                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3 font-serif">
                                    {paper.title}
                                  </h4>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-sans">推荐度</span>
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star 
                                          key={i} 
                                          size={14} 
                                          className={i < paper.recommendation ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"} 
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-1 text-xs font-medium text-slate-500 font-sans">
                                  <div className="flex items-start gap-2">
                                    <span className="w-8 flex-shrink-0 font-bold tracking-widest uppercase">作者</span>
                                    <span className="text-slate-700">{paper.authors}</span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <span className="w-8 flex-shrink-0 font-bold tracking-widest uppercase">单位</span>
                                    <span className="text-slate-700">{paper.affiliation}</span>
                                  </div>
                                </div>

                                <div className="bg-blue-50/30 p-6 rounded-sm text-base text-slate-800 leading-loose border-l-4 border-blue-200 font-serif shadow-sm">
                                  <span className="font-bold text-slate-900 block mb-2 font-sans text-sm uppercase tracking-wider">论文简介</span>
                                  <div className="markdown-body">
                                    <Markdown 
                                      remarkPlugins={[remarkGfm, remarkBreaks]}
                                      components={{
                                        strong: ({ children }) => <strong className="font-bold text-slate-900 font-sans">{children}</strong>,
                                      }}
                                    >
                                      {paper.abstract}
                                    </Markdown>
                                  </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                                  <div className="flex flex-wrap gap-2">
                                    {paper.tags.map((tag, idx) => (
                                      <span key={idx} className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold rounded-full font-sans">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <a 
                                    href={paper.link} 
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider font-sans"
                                  >
                                    阅读原文
                                    <ExternalLink size={14} />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-slate-400 text-sm font-serif italic">此主题下的文章速递正在整理中...</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Part 3: Deep Dive */}
          <section id="deep-dive" className="scroll-mt-24">
            <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-sm shadow-xl border border-slate-100">
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-serif font-bold tracking-widest text-slate-900 mb-4">
                  Part2：深度解读
                </h2>
                <div className="w-12 h-1 bg-emerald-500 mx-auto mb-6"></div>
                <p className="text-slate-500 tracking-wide font-sans">
                  6 篇文章深度解读
                </p>
              </div>

              <div className="space-y-24">
                {deepDivePapers.map((paper, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={paper.id} 
                    id={paper.id}
                    className="scroll-mt-24"
                  >
                    {/* Deep Dive Header */}
                    <div className="border-b-2 border-slate-900 pb-4 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase font-sans">
                          深度解读 {index + 1}
                        </span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold leading-tight text-slate-900">
                        {paper.title}
                      </h3>
                    </div>

                    <div className="space-y-10">
                      {/* Prerequisites */}
                      <section>
                        <div className="mb-4 bg-emerald-50/50 border-l-4 border-emerald-600 p-3 rounded-r-sm shadow-sm">
                          <h4 className="flex items-center gap-2 text-lg font-bold text-emerald-900 tracking-wide font-sans">
                            <Lightbulb className="text-emerald-600" size={18} />
                            前导知识
                          </h4>
                        </div>
                        <div className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm">
                          <ul className="space-y-3">
                            {paper.prerequisites.map((req, idx) => {
                              const [term, desc] = req.split('：');
                              return (
                                <li key={idx} className="flex items-start gap-3 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                                  <span className="text-slate-700 leading-normal font-serif">
                                    <strong className="text-slate-900 font-semibold font-sans">{term}：</strong>
                                    {desc}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </section>

                      {/* Q&A Section */}
                      <section>
                        <div className="mb-6 bg-emerald-50/50 border-l-4 border-emerald-600 p-3 rounded-r-sm shadow-sm">
                          <h4 className="text-lg font-bold text-emerald-900 tracking-wide font-sans">
                            关键 Q&A
                          </h4>
                        </div>
                        
                        <div className="space-y-4">
                          {paper.qna.map((item, idx) => (
                            <div key={idx} className="bg-slate-50/50 p-6 rounded-sm border border-slate-100 space-y-4">
                              {/* Question */}
                              <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-serif font-bold text-sm rounded-sm mt-1">
                                  Q{idx + 1}
                                </div>
                                <div>
                                  <p className="font-bold text-slate-900 text-xl leading-snug font-serif">{item.q}</p>
                                </div>
                              </div>
                              
                              {/* Answer */}
                              <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-emerald-50 text-emerald-700 flex items-center justify-center font-serif font-bold text-sm rounded-sm mt-1 border border-emerald-100">
                                  A{idx + 1}
                                </div>
                                <div className="flex-1 space-y-4">
                                  <div className="markdown-body text-slate-700 leading-relaxed text-justify font-serif">
                                    <Markdown 
                                      remarkPlugins={[remarkGfm, remarkBreaks]}
                                      components={{
                                        strong: ({ children }) => <strong className="font-bold text-slate-900 font-sans">{children}</strong>,
                                        ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                                        li: ({ children }) => <li className="text-slate-700">{children}</li>,
                                      }}
                                    >
                                      {item.a}
                                    </Markdown>
                                  </div>
                                  
                                  {/* Optional Image */}
                                  {item.image && (
                                    <div className="mt-4 rounded-sm overflow-hidden border border-slate-200 shadow-sm">
                                      <img 
                                        src={item.image} 
                                        alt={`Illustration for Q${idx + 1}`} 
                                        className="w-full h-auto object-cover"
                                        referrerPolicy="no-referrer"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Extended Resources Section */}
                      {paper.extendedResources && paper.extendedResources.length > 0 && (
                        <section>
                          <div className="mb-4 bg-emerald-50/50 border-l-4 border-emerald-600 p-3 rounded-r-sm shadow-sm">
                            <h4 className="text-lg font-bold text-emerald-900 tracking-wide font-sans">
                              扩展资料
                            </h4>
                          </div>
                          <div className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm">
                            <ul className="space-y-3">
                              {paper.extendedResources.map((resource: any, idx: number) => (
                                <li key={idx} className="flex items-center gap-3 text-sm group">
                                  <LinkIcon 
                                    size={14} 
                                    className={resource.link ? "text-blue-600" : "text-slate-300"} 
                                  />
                                  {resource.link ? (
                                    <a 
                                      href={resource.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 hover:underline font-serif transition-colors decoration-blue-300 underline-offset-4"
                                    >
                                      {resource.name}
                                    </a>
                                  ) : (
                                    <span className="text-slate-600 font-serif">
                                      {resource.name}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </section>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
        
        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm font-sans">
          <p>CIDR 2026 数据库顶会专刊</p>
        </footer>
      </main>
    </div>
  );
}
