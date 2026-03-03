export const sessions = [
  { id: 'session-1', title: 'Session 1: LLMs for Databases' },
  { id: 'session-2', title: 'Session 2: Data Platform Benchmarking and Optimization Techniques' },
  { id: 'session-3', title: 'Session 3: Text-to-SQL, Agents, LLMs, Oh My!' },
  { id: 'session-4', title: 'Session 4: Distributed Coordination and Consistency' },
  { id: 'session-5', title: 'Session 5: SQL and Data Modeling' },
  { id: 'session-6', title: 'Session 6: Data Integration and Wrangling' },
  { id: 'session-7', title: 'Session 7: Memory, I/O, and Data Movement in Modern Data Systems' },
  { id: 'session-8', title: 'Session 8: Hardware-Accelerated Query Processing' },
];

export const expressPapers = [
  {
    "id": 1,
    "sessionId": "session-1",
    "title": "BridgeScope: A Universal Toolkit for Bridging Large Language Models and Databases",
    "recommendation": 5,
    "authors": "Lianggui Weng, Dandan Liu, Rong Zhu, Bolin Ding, Jingren Zhou",
    "affiliation": "Alibaba Group（阿里巴巴）",
    "abstract": "当前 LLM 与数据库交互的设计在易用性、安全性、权限管理和数据传输效率方面仍存在关键局限，为了应对这些挑战，该研究提出了通用的连接工具包框架 BridgeScope。通过将 SQL 操作模块化为**细粒度**的工具、将工具实现与数据库权限和用户定义的安全策略相对齐以及建立绕过模型中转的工具间数据通信代理，BridgeScope显著提升了 Agent 任务执行的鲁棒性。实验证明，该方法在减少计算开销的同时，确保了严密的权限控制。现有的数据库工具通常只提供 execute_sql 等粗粒度工具。这导致模型对用户权限、事务状态缺乏感知，容易引发误操作，如在只读任务中尝试 DROP 操作。BridgeScope 将数据库操作封装为符合 **MCP 标准**的服务，并在此基础上实现了细粒度的工具拆分，如单独的 select、begin、commit 工具。这种模式利用了 MCP 的标准框架，同时引入了\"代理机制（Proxy）\"来解决 MCP 默认模式中数据必须经过 LLM 造成的 Token 瓶颈问题。BridgeScope 最多可减少 80% 的 Token 使用量，并能够支持现有工具包无法处理的数据密集型工作流。开源链接：https://github.com/duoyw/bridgescope",
    "link": "https://vldb.org/cidrdb/papers/2026/p4-weng.pdf",
    "tags": ["LLM Agent", "数据库安全", "事务管理", "数据传输优化"]
  },
  {
    "id": 2,
    "sessionId": "session-1",
    "title": "KathDB: Explainable Multimodal Database Management System with Human-AI Collaboration",
    "recommendation": 5,
    "authors": "Guorui Xiao, Enhao Zhang, Nicole Sullivan, Will Hansen, Magdalena Balazinska",
    "affiliation": "University of Washington（华盛顿大学）",
    "abstract": "传统的数据库管理系统（DBMS）可以在具有强语义保证和高级查询优化的关系数据上执行用户或应用程序提供的 SQL 查询，但仅关注结构化表格。当代的多模态系统要么暴露低级控制，提高使用门槛，强迫用户在 SQL 中手动使用甚至创建机器学习用户定义函数（UDF），要么将执行完全交给黑盒化的 LLM，从而牺牲了易用性或可解释性。为了应对上述挑战，该研究提出了一种新型多模态数据库管理系统架构 KathDB。KathDB 通过构建统一的**关系语义视图层**，将机器学习任务转化为一组可追踪、可复用的逻辑算子序列，并引入多轮交互机制允许用户对查询意图进行校正。KathDB 利用关系数据库的属性，将 ML 生成的预测结果（Predictions）与原始元组的 ID（TID）强制绑定。这意味着即使经过复杂的连接操作，每一个生成的属性仍然携带着它在原始非结构化文件中的\"坐标\"信息，可以实现从\"结构化查询结果\"到\"非结构化原始素材\"的精准反向追踪。用户可以要求系统解释某个结果的来源。系统会展示该元组生成的\"证据链\"：即从原始多模态输入，经过哪些中间 ML 算子转化，最终合并到关系表中的过程。",
    "link": "https://vldb.org/cidrdb/papers/2026/p14-xiao.pdf",
    "tags": ["多模态数据库", "可解释 AI", "查询优化", "人机协作"]
  },
  {
    "id": 3,
    "sessionId": "session-1",
    "title": "Deep Research is the New Analytics System: Towards Building the Runtime for AI-Driven Analytics",
    "recommendation": 4,
    "authors": "Matthew Russo, Tim Kraska",
    "affiliation": "MIT（麻省理工学院）",
    "abstract": "该研究探讨了将深度研究系统与数据库语义算子结合的运行时系统，填补了传统语义算子系统在处理大规模非结构化数据时灵活性不足的空白。该研究通过引入计算和搜索逻辑算子，允许 **Agent** 编写并执行经过优化后的语义算子程序，实现了分析精度与运行效率的平衡。对于在云端大数据分析（OLAP）场景下的智能化演进，特别是如何利用 AI 自动生成并优化复杂分析流水线，该研究提供了务实的方案。",
    "link": "https://vldb.org/cidrdb/papers/2026/p30-russo.pdf",
    "tags": ["AI 驱动分析", "查询执行引擎", "语义算子", "非结构化数据"]
  },
  {
    "id": 4,
    "sessionId": "session-1",
    "title": "Waiting to Decompress: The Economics of LLM-Based Compression",
    "recommendation": 4,
    "authors": "Andreas Kipf, Tobias Schmidt, Ping-Lin Kuo, Skander Krid, Moritz Rengert, Luca Heller, Andreas Zimmerer, Mihail Stoian, Varun Pandey, Alexander van Renen",
    "affiliation": "University of Technology Nuremberg（纽伦堡理工大学）、Technical University of Munich（慕尼黑工业大学）",
    "abstract": "该研究对 LLM 在数据压缩领域的应用前景进行了深入的技术经济学剖析。该研究通过实验证实，虽然 LLM 模型利用高跨熵预测能力能实现超越 zstd 两倍以上的压缩比，但昂贵的 GPU 推理时间使其在**当前阶段难以大规模商用**。研究指出，按照当前的计算和存储成本，基于大语言模型的压缩需要10年才能\"回本\"，省下的每一分存储费，需要攒足 10 年才能抵消掉当初为了执行压缩而付出的那笔算力成本。与传统压缩方法相比，基于大语言模型的压缩需要120年才能赶上传统压缩方法。与那些免费或极低成本的传统压缩方案相比，LLM 压缩多省出来的存储费，需要存 120 年才能把多花的算力费赚回来。研究进一步预测了硬件算力与存储成本的演进曲线，明确了 AI 压缩走向实用化的时间节点。随着硬件和模型效率的预期提升，基于大语言模型的压缩可能在未来十年内具备经济可行性。尽管现在看来极其不划算，但随着 GPU 和专用 AI 芯片（如 NPU）的性能提升和价格下降，成本曲线正在快速下降，在未来十年内AI 压缩省下的钱将能快速覆盖其计算成本，具备实际部署的价值。开源链接：https://github.com/utndatasystems/compression-economics",
    "link": "https://vldb.org/cidrdb/papers/2026/p34-kipf.pdf",
    "tags": ["数据压缩", "LLM 推理优化", "存储成本建模", "硬件趋势预测"]
  },
  {
    "id": 5,
    "sessionId": "session-1",
    "title": "Making Prompts First-Class Citizens for Adaptive LLM Pipelines",
    "recommendation": 4,
    "authors": "Uğur Çetintemel, Deepti Raghavan, Shu Chen, Duo Lu, Alexander W. Lee, Andrew Crotty",
    "affiliation": "Brown University（布朗大学）、Northwestern University（西北大学）",
    "abstract": "该研究针对当前大语言模型（LLM）流水线中 Prompt 管理碎片化且缺乏运行时自适应的问题，提出了 SPEAR 架构，将 Prompt 从静态字符串提升为执行模型中的\"一等公民\"。该架构借鉴数据库视图管理思想，将 Prompt 组织为**版本化的逻辑视图**，并通过一套可闭合组合的\"Prompt 代数\"（如 GENERATE、SWITCH 等算子）实现 Prompt 逻辑与程序执行的深度融合。此外，研究引入了策略驱动控制（WHEN-THEN 规则），使 Prompt 能够根据运行时的实时信号（如 Token 预算、结果置信度）进行动态细化和模型路由，从而在保证输出质量的同时显著优化执行效率和成本。通过解决运行时 Prompt 细化问题，SPEAR 在现有 Prompt 优化框架和语义查询处理引擎的庞大生态中发挥了补充作用。",
    "link": "https://vldb.org/cidrdb/papers/2026/p26-cetintemel.pdf",
    "tags": ["Prompt 工程", "提示词管理", "自适应流水线", "元数据管理"]
  },
  {
    "id": 6,
    "sessionId": "session-2",
    "title": "A Multi-tenant Relational OLTP Database at Salesforce",
    "recommendation": 5,
    "authors": "Vaibhav Arora, Thomas Fanghaenel, Subho Chatterjee, Pat Helland, Kaushal Mittal, Terry Chong, Jamie Martin, Nat Wyatt",
    "affiliation": "Salesforce（赛富时）",
    "abstract": "该研究聚焦于LSM 存储架构在关系型 OLTP 场景下跨多个层级读取数据的性能成本方面的挑战。该研究介绍了 Salesforce 如何通过修改 PostgreSQL 内核并引入 LSM 存储引擎来支撑超大规模多租户 OLTP 业务，主要提出了针对 LSM 读性能的三项额外优化：**缓存技术**以实现类似 RowID 的直接寻址，利用**基于前缀树的 CRaFT 过滤器**跳过无效的范围扫描，并设计了**早期墓碑裁剪(Early Tombstone Pruning)策略**以优化队列型业务的处理。",
    "link": "https://vldb.org/cidrdb/papers/2026/p28-arora.pdf",
    "tags": ["多租户架构", "LSM 引擎", "读优化", "OLTP"]
  },
  {
    "id": 7,
    "sessionId": "session-2",
    "title": "End-to-End Declarative Data Analytics: Co-designing Engines, Interfaces, and Cloud Infrastructure",
    "recommendation": 4,
    "authors": "Pinghe Li, Tobias Stocker, Tom Kuchler, Gustavo Alonso, Marko Kabić, Ana Klimovic",
    "affiliation": "ETH Zurich（苏黎世联邦理工学院）",
    "abstract": "该研究挑战了传统数据库将云基础设施视为黑盒的做法，提出了端到端声明式分析架构。通过将查询计划转化为细粒度的 **Serverless 数据流图**，并将资源编排、数据预取、算子放置、缓存和异构硬件调度等交给具备全局视角的云平台层处理，重新思考了引擎与云平台之间的接口如何实现数据湖上弹性的数据依赖并行执行、自动缓存，并为云分析开启了新的研究方向。",
    "link": "https://vldb.org/cidrdb/papers/2026/p15-li.pdf",
    "tags": ["Serverless 数据库", "存算分离", "执行计划", "云原生架构"]
  },
  {
    "id": 8,
    "sessionId": "session-2",
    "title": "Survivorship Bias in Industrial Database Workloads",
    "recommendation": 4,
    "authors": "Ryan Marcus, Peizhi Wu, Jeffrey Tao, Zijie Zhao",
    "affiliation": "University of Pennsylvania（宾夕法尼亚大学）",
    "abstract": "研究界正从依赖 TPC 等\"合成基准\"转向参考\"工业工作负载\"，因为后者更能反映真实用户的需求和行为。该研究通过案例证明，现有的工业工作负载记录并非用户原始需求的真实反映，而是用户根据现有系统缺陷进行\"绕路\"后的结果，此处存在**幸存者偏差**。由于系统对特定模式（如即席查询）支持不佳，用户会倾向于发布高度重复的负载。如果只根据工业工作负载这个\"基准\"来优化系统，工程师可能会像二战中只给返航飞机的弹孔加钢板一样，忽略了那些因为系统太慢而从未被用户提交的重要查询（即未幸存的查询），可能会陷入只优化现有模式而忽视潜在需求的死循环。",
    "link": "https://vldb.org/cidrdb/papers/2026/p22-marcus.pdf",
    "tags": ["工作负载分析", "性能评估", "产品方法论", "Benchmark 设计"]
  },
  {
    "id": 9,
    "sessionId": "session-2",
    "title": "PostgreSQL-V: Fast Vector Search in PostgreSQL: A Decoupled Approach",
    "recommendation": 5,
    "authors": "Jiayi Liu, Yunan Zhang, Chenzhe Jin, Aditya Gupta, Shige Liu, Jianguo Wang",
    "affiliation": "Purdue University（普渡大学）",
    "abstract": "该研究针对集成式向量数据库性能瓶颈，提出了将向量索引与数据库核心存储引擎**解耦**的核心思想。PostgreSQL-V引入 LSM 架构来直接利用原生向量索引库（如 Faiss）实现高性能。对于解耦操作引入的索引不一致挑战，设计了基于状态页（Status Pages）的轻量级元数据管理方案。实验证明其搜索性能达到专用数据库级别。开源链接：https://github.com/purduedb/PostgreSQL-V",
    "link": "https://vldb.org/cidrdb/papers/2026/p2-liu.pdf",
    "tags": ["向量数据库", "解耦索引", "LSM 引擎", "检索增强生成 (RAG)"]
  },
  {
    "id": 10,
    "sessionId": "session-2",
    "title": "I Can’t Believe It’s Not Yannakakis: Pragmatic Bitmap Filters in Microsoft SQL Server",
    "recommendation": 5,
    "authors": "Hangdong Zhao, Bailu Ding, Vassilis Papadimos, Yuanyuan Tian, Nicolas Bruno, Ernesto Cervantes Juárez, Carlo Curino, Rana Alotaibi, Jesús Camacho-Rodríguez, Cesar Galindo-Legaria",
    "affiliation": "Microsoft（微软）, KACST（阿卜杜拉国王科技城）",
    "abstract": "该研究深入剖析了 SQL Server 如何将**位图过滤器**无缝集成到拉取式执行模型中，从而隐式实现了实例最优的连接计划。该研究证明，通过 Cascades 优化器将位图开销建模为原生代价维度，并允许在中间结果上动态构建和下推过滤器，可以显著减少非必要的数据扫描和连接探测开销，展示了工业界如何通过务实的工程设计将复杂的理论算法转化为普适的加速能力。",
    "link": "https://vldb.org/cidrdb/papers/2026/p29-zhao.pdf",
    "tags": ["位图过滤", "连接优化", "优化器设计", "Cascades 模型"]
  },
  {
    "id": 11,
    "sessionId": "session-3",
    "title": "Text-to-SQL Benchmarks are Broken: An In-Depth Analysis of Annotation Errors",
    "recommendation": 4,
    "authors": "Tengjun Jin, Yoojin Choi, Yuxuan Zhu, Daniel Kang",
    "affiliation": "UIUC（伊利诺伊大学厄巴纳-香槟分校）",
    "abstract": "当前主流 Text-to-SQL 基准测试在可靠性方面存在缺陷，数据集中普遍存在的**标注错误与模糊问题**已削弱其评估效力。为此，该研究针对 BIRD 和 Spider 2.0-Snow 两大广泛使用的基准进行了深度剖析，旨在揭示错误模式并构建更高质量的评估体系。该研究通过以下机制拆解错误成因：1）**分类化错误诊断**：将标注问题归纳为 SQL 语义错位、数据库理解偏差、领域知识匮乏及自然语言歧义四类，精准定位了引擎评测中的失效点 ；2）**动态数据库修正**：通过向数据库插入区分性测试案例，解决了错误查询在特定数据集下产生“假阳性”结果的掩盖效应。评测成效显示，BIRD Mini-Dev 与 Spider 2.0-Snow 的错误率分别高达 52.8% 和 66.1%。进一步地，在修正后的基准上重测发现，主流智能体的相对性能波动幅度在 -3% 至 31% 之间，部分排名变动达三个位次，这证实了现有榜单难以真实反映技术水平。开源链接：https://github.com/xlang-ai/Spider2/blob/main/spider2-snow/spider2-snow-0713.jsonl",
    "link": "https://vldb.org/cidrdb/papers/2026/p5-jin.pdf",
    "tags": ["Text-to-SQL", "基准测试评估", "大语言模型"]
  },
  {
    "id": 12,
    "sessionId": "session-3",
    "title": "Leveraging Query Optimizers to Verify the Soundness of LLM-based Query Rewrites for Real-World Workloads, and More!",
    "recommendation": 5,
    "authors": "Vivek Narasayya, Surajit Chaudhuri",
    "affiliation": "Microsoft（微软）",
    "abstract": "现有数据库优化器在处理 LLM 生成的 SQL 重写时，常因无法自动验证语义等价性而**难以实现闭环自动化调优**。面对这一障碍，该研究提出了 QO-Verify 机制，核心设计理念是**变“被动优化”为“主动验证”**，利用优化器内置的代数转换规则打破 SQL 等价性判定在复杂查询下的僵局。在架构底层，该研究实现了多项关键创新：1）**Memo 结构匹配机制**：通过对比两组查询在优化器 Memo 空间中生成的逻辑表达式，只要发现共有节点即可证明等价，有效规避了传统 SMT 求解器在处理嵌套聚合时的失效问题 ；2）**规范化预处理策略**：在 Memo 构建前执行常量折叠与去相关化等步骤，消除因写法差异导致的语义遮蔽 ；3）**规则蒸馏反馈**：从验证失败但性能提升的重写案例中，反向提炼出如“窗口函数替换关联子查询”等新型转换规则，完善优化器内核。评测成效显示，在 Microsoft SQL Server 的真实企业级工作负载下，QO-Verify 成功验证了 37% 的 LLM 重写建议，且单次匹配的中位时间仅为 1.2 秒。目前，该项研究已验证了通过优化器能力支撑 AI 驱动调优的可行性。",
    "link": "https://vldb.org/cidrdb/papers/2026/p33-narasayya.pdf",
    "tags": ["查询优化器", "查询重写", "语义等价", "AI内核增强"]
  },
  {
    "id": 13,
    "sessionId": "session-3",
    "title": "BenchPress: A Human-in-the-Loop Annotation System for Rapid Text-to-SQL Benchmark Curation",
    "recommendation": 4,
    "authors": "Fabian Wenz, Omar Bouattour, Devin Yang, Justin Choi, Cecil Gregg, Nesime Tatbul, Çağatay Demiralp",
    "affiliation": "TUM（慕尼黑工业大学）, MIT（麻省理工学院）",
    "abstract": "现有 Text-to-SQL 模型在处理私有企业级数据时，常因模式复杂、领域术语多及隐私限制，导致执行准确率较公共数据集大幅下降。面对这一瓶颈，该研究推出了 BenchPress 系统，旨在通过人机协同的方式，利用海量 SQL 日志快速构建领域定制化基准测试。在架构底层，系统核心机制包括：1）**检索增强生成（RAG）**：利用向量嵌入技术从历史标注中提取语义相似案例，结合 Schema 上下文引导模型生成精准的自然语言描述 ；2）**查询解耦与重组**：针对嵌套 SQL 自动进行 CTE 转换，分步生成语义块并最终合并，有效降低了标注复杂逻辑时的认知负荷。评测成效显示，在 BEAVER 企业级数据集的测试中，BenchPress 的标注准确率达到 86.1%，远超手工标注，且总标注耗时从 183.9 分钟缩减至 28.1 分钟。目前，该系统已通过开源仓库公开发布。开源链接：https://github.com/fabian-wenz/enterprise-txt2sql",
    "link": "https://vldb.org/cidrdb/papers/2026/p16-wenz.pdf",
    "tags": ["数据标注", "Text-to-SQL", "人机协同", "企业级基准"]
  },
  {
    "id": 14,
    "sessionId": "session-3",
    "title": "Please Don't Kill My Vibe",
    "recommendation": 4,
    "authors": "Charlie Summers, Haneen Mohammed, Eugene Wu",
    "affiliation": "Columbia University（哥伦比亚大学）",
    "abstract": "当前大型语言模型（LLM）智能体在执行复杂任务时，常面临隐私违规、业务流程损坏及提示词注入等数据流安全风险。面对这一挑战，该研究提出了数据流控制（DFC）框架，主张将安全性强制措施从应用层下沉至数据库管理系统（DBMS）内核，以原生机制管理不可信的数据流动。在架构底层，研究核心设计包括：1）**FlowGuard 策略语言**：基于来源多项式（Provenance Polynomials）构建布尔声明，在无需修改数据库内核的前提下，通过查询重写技术实现精细化的数据流校验与阻断 ；2）**轻量化监控机制**：通过内联聚合表达式与最终投影，在执行阶段实时识别合规性漏洞，直接过滤掉违反 K-匿名性或非法状态转移的数据流。评测成效显示，在 TPC-H 数据集下，FlowGuard 相比传统逻辑来源捕捉系统降低了数个数量级的性能开销，且无需侵入式修改系统内部。目前，该研究已完成初步系统验证并确立了跨域数据流控制的演进路线。",
    "link": "https://vldb.org/cidrdb/papers/2026/p10-summers.pdf",
    "tags": ["数据流控制", "智能体安全", "数据库访问控制"]
  },
  {
    "id": 15,
    "sessionId": "session-3",
    "title": "Supporting Our AI Overlords: Redesigning Data Systems to be Agent-First",
    "recommendation": 5,
    "authors": "Shu Liu, Soujanya Ponnapalli, Shreya Shankar, Sepanta Zeighami, Alan Zhu, Shubham Agarwal, Ruiqi Chen, Samion Suwito, Shuo Yuan, Ion Stoica, Matei Zaharia, Alvin Cheung, Natacha Crooks, Joseph E. Gonzalez, Aditya G. Parameswaran",
    "affiliation": "UC Berkeley（加州大学伯克利分校）",
    "abstract": "现有数据系统架构在应对高吞吐、高冗余的 LLM 智能体负载时，因缺乏对“智能体投机”（Agentic Speculation）工作模式的原生支持，正面临严重的性能瓶颈与资源浪费。为此，该研究提出了首个“智能体优先”的数据系统架构，核心理念是将系统从单纯的查询响应者转变为主动的协作参与者，通过原生支持探测（Probes）机制打破传统 SQL 的表达局限。在架构底层，该研究实现了多项技术创新：1）**Satisficing 探测优化器**：通过跨 turns 的多查询优化与近似处理机制，在满足智能体决策需求的前提下大幅减少冗余计算；2）**智能体记忆存储（Agentic Memory Store）**：构建语义化缓存，通过存储过往探测结果与元数据语义，为智能体提供快速的“接地”反馈；3）**共享事务管理器**：针对智能体特有的分支更新负载，实现了物理层面的状态共享与超快速回滚。评测成效显示，在 BIRD 基准测试中，该架构通过主动引导与工作共享，使智能体查询成功率提升了 14%-70%，并在多库联合任务中通过提示词引导使查询量减少了 20% 以上。",
    "link": "https://vldb.org/cidrdb/papers/2026/p32-liu.pdf",
    "tags": ["智能体优先架构", "AI原生数据库", "未来工作负载引擎"]
  },
  {
      id: 16, 
      sessionId: 'session-4', 
      title: 'Consistency and Correctness in Data-Oriented Workflow Systems', 
      recommendation: 5, 
      authors: 'Michael Stonebraker, Xinjing Zhou, Peter Kraft, Qian Li', 
      affiliation: 'Massachusetts Institute of Technology (麻省理工学院), DBOS', 
      abstract: '面向数据的**工作流系统**易因故障出现执行异常，且错误处理代码占比极高，现有**持久化执行**仅能保障正向流程运行，无法解决异常后的一致性问题。为此，研究提出将 ACID 特性从单事务扩展至整个工作流的 **AC/DC 语义保障**，打造基于数据库的工作流原型系统，打破传统工作流在故障恢复与并发一致性上的局限。该系统核心创新体现在两点：1）**持久化计算机制**，将工作流日志与数据库操作原子提交，实现步骤的恰好一次执行，故障后可从最后完成步骤恢复；2）**双回滚机制**，支持基于保存点的**物理回滚**和**Saga补偿回滚**，前者保障强一致性，后者提升并发性能。研究基于电商结账工作流开展实验，发现低竞争场景下物理回滚工作流性能更优，高竞争或长步骤场景下补偿回滚方案吞吐更高且无中止，物理回滚则会出现较高中止率。该原型已在 DBOS 中实现，相关代码完成原型开发。开源链接：https://github.com/DBOS-project/dbos-transact-py', // 摘要
      link: 'https://mail.vldb.org/cidrdb/papers/2026/p9-stonebraker.pdf', 
      tags: ['工作流', '持久化', '原子性', '并发性能'] 
    },
  {
      id: 17, 
      sessionId: 'session-4', 
      title: 'Event Horizon: Asymmetric Dependencies for Fast Geo-Distributed Operations', 
      recommendation: 3, 
      authors: 'Jonathan Arns, Harald Ng, Kyriakos Psarakis, Asterios Katsifodimos, Paris Carbone', 
      affiliation: 'KTH Royal Institute of Technology（瑞典皇家理工学院）, Ververica GmbH(维沃瑞卡有限公司), Delft University of Technology(荷兰代尔夫特理工大学)', 
      abstract: '现有**地理分布式应用**的混合一致性模型因采用二元冲突视角、忽视操作间的非对称依赖，存在过度协调的问题，难以**兼顾低延迟与状态一致性**。面对这一挑战，研究提出**半线性化（SL）一致性模型**，并实现了 DeMon 地理复制内存存储系统，通过捕捉操作间的**定向依赖关系**，仅在必要时执行协调，打破强、弱一致性的僵化二分局限。研究首先形式化定义非对称操作依赖，精准表达应用不变量，摆脱传统二元冲突的限制；其次设计半线性化顺序，将强操作严格排序、弱操作以因果一致性归为数据包，仅当强操作形成 “事件视界” 时才统一收敛发散状态；最后 DeMon 通过共识协议处理强操作、因果广播执行弱操作，结合水印机制保障操作间的正确序关系。在跨 5 个地域的 RUBiS 基准测试中，该系统让占比 60% 的 Bid 操作实现亚毫秒级延迟，相比主流系统，其最频繁操作的延迟降低四个数量级，且在吞吐量与协调开销上均展现出更优的表现，强操作延迟与纯共识协议持平，弱操作则保持无协调的高效执行。开源链接：https://github.com/JonathanArns/demon', 
      link: 'https://www.vldb.org/cidrdb/papers/2026/p20-arns.pdf', 
      tags: ['地理分布式应用', '半线性化', '一致性模型'] 
    },
  {
      id: 18, 
      sessionId: 'session-4', 
      title: 'Privacy Meets Regulations: Shaping the Future of Work', 
      recommendation: 3, 
      authors: 'Mohammad Javad Amiri, Tristan Allard, Boon Thau Loo, Divyakant Agrawal, Amr El Abbadi', 
      affiliation: 'Stony Brook University（石溪大学）, University of Rennes(雷恩大学), CNRS(法国国家科学研究中心), University of Pennsylvania(宾夕法尼亚大学), University of California(加州大学)', 
      abstract: '零工经济下的跨平台众包架构难以兼顾劳动法规执行与参与者隐私保护，单一平台的本地规制易被规避，而平台间协作又存在信息泄露风险，成为现有架构的核心瓶颈。面对这一挑战，研究提出一套多平台众包规制系统，以**轻量级匿名令牌**和**容错协议**为核心设计理念，打破分布式独立平台间的**规制执行与隐私保护的矛盾局限**。该系统的核心技术创新体现在三方面：1）构建含**规制、隐私、架构、内容**四大维度的设计空间，用 SQL 约束清晰定义规制类型与执行属性，实现规制的标准化建模；2）设计**令牌化隐私保护**机制，为参与者分配匿名令牌并结合零知识证明，在验证规制合规性的同时避免隐私信息泄露；3）搭建**分布式账本与分层数据模型**的双层架构，账本保障平台间的透明共识，分层模型实现本地、跨平台与全局数据的隔离管理。研究基于 Amazon EC2 平台完成原型验证，4 平台测试环境下隐私保护技术仅带来 11%-15% 的吞吐与延迟开销，令牌生成支持线性扩展，单机构造百万令牌约 76 秒，多机并行可进一步提升效率，且规制目标数量对系统性能无显著影响。', 
      link: 'https://vldb.org/cidrdb/papers/2026/p23-amiri.pdf', 
      tags: ['跨平台众包架构', '隐私保护'] 
    },
  {
      id: 19, 
      sessionId: 'session-4', 
      title: 'Rosé: Flexible Replication With Strong Semantics For Partitioned Databases', 
      recommendation: 3, 
      authors: 'Ioannis Zarkadas, Kelly Kostopoulou, Thomas Graham, Junfeng Yang, Philip A. Bernstein, Asaf Cidon, Tamer Eldeeb', 
      affiliation: 'Columbia University（哥伦比亚大学）, Microsoft Research(微软研究院)', 
      abstract: '现有**分区数据库**的**异步主备复制**存在数据一致性难保障、复制延迟无界、故障恢复后性能受损的技术瓶颈，该研究提出 Rosé 复制方案，以**平衡全同步与异步复制**为核心设计理念，打破传统异步主备复制的上述局限。Rosé 首先融合数据库**快照机制**与**异步复制**，依托全局快照为备份节点提供单调前缀一致性，解决跨分区复制的状态不一致问题；其次设计**基于推模式的背压机制**，为各分区设置事务队列并做写入限流，实现复制延迟的有效限制且保障系统高可用；最后将**日志复制与键值存储应用解耦**，通过协调式日志应用策略，让备份节点仅应用至最新全局一致快照，大幅降低故障恢复的耗时并规避性能损耗。研究将 Rosé 集成至 Chablis 键值存储系统开展测试，验证其能稳定限制复制延迟，故障恢复后无吞吐量下降、P99 延迟无增加，对比 Yugabyte，其在故障恢复后的读性能表现更优，当前 Rosé 为原型系统，尚未实现产品级的完整功能支持。', 
      link: 'https://mail.vldb.org/cidrdb/papers/2026/p8-zarkadas.pdf', 
      tags: ['分区数据库', '异步主备复制', '一致性', '复制延迟', '故障恢复'] 
    },
   {
    id: 20,
    sessionId: 'session-5',
    title: 'On the Vexing Difficulty of Evaluating IN Predicates',
    recommendation: 3,
    authors: 'Altan Birler, Thomas Neumann',
    affiliation: 'Technische Universität München (德国慕尼黑工业大学)',
    abstract: 'SQL中的**IN谓词**在处理NULL值时，常导致现有系统陷入**二次时间复杂度或计算错误** 。面对这一挑战，该研究分析了该问题的理论硬度瓶颈，提出了一套兼顾严谨性与效率的执行框架，并在Umbra引擎内核中实现 。为此，研究首先设计了优化的**标记连接算子**，通过构建全键哈希与投影哈希的双重索引机制，实现了对完全匹配与部分匹配的逻辑解耦，解决了三值逻辑下的求值路径重叠问题 。针对单空值属性等高频场景，该架构还引入了特定的线性时间求值策略，利用位向量与索引优化有效解决了空值环境下的性能退化问题 。在SQLStorm基准测试中，该方案相比主流引擎表现出更佳的扩展性。',
    link: 'https://vldb.org/cidrdb/2026/on-the-vexing-difficulty-of-evaluating-in-predicates.html',
    tags: ['SQL','查询处理','IN 表达式','标记连接']
  },
  {
    id: 21,
    sessionId: 'session-5',
    title: 'Raqlet: Cross-Paradigm Compilation for Recursive Queries',
    recommendation: 3,
    authors: 'Amir Shaikhha, Youning Xia, Meisam Tarabkhah, Jazal Saleem, Anna Herlihy',
    affiliation: 'University of Edinburgh（爱丁堡大学）',
    abstract: '针对现代数据库在处理**递归查询**时存在的**跨范式执行**与**性能优化碎片化**问题，该研究提出了 Raqlet 编译框架。其核心理念是通过源到源的转换技术，打破关系型、图形与演绎数据库之间的隔阂。在底层架构中，该框架采用了多层中间表示机制：1）**层次化 IR 体系**：将 Cypher 或 SQL/PGQ 逐步降载为属性图 IR、逻辑规则 IR 及 SQL IR，实现了复杂查询语义在不同范式间的解耦与对等转换；2）**静态分析与重写**：基于 Datalog 语义对递归查询进行单调性与终结性检查，并提供算子下推等优化。在 LDBC SNB 基准测试中，经该框架转换后的查询在 Soufflé、DuckDB 等引擎上的执行效率能够比肩甚至超越原生图形数据库。',
    link: 'https://vldb.org/cidrdb/2026/raqlet-cross-paradigm-compilation-for-recursive-queries.html',
    tags: ['递归查询','跨范式编译']
  },
  {
    id: 22,
    sessionId: 'session-5',
    title: 'Semantic Data Modeling, Graph Query, and SQL, Together at Last?',
    recommendation: 4,
    authors: 'Jeff Shute, Colin Zheng, Romit Kudtarkar',
    affiliation: '谷歌',
    abstract: '当前**语义数据模型**通常独立于数据库层，导致业务逻辑难以在SQL查询中直接复用。面对这一挑战，该研究提出将语义模型定义为**SQL原生图视图**的思路，旨在打破语义逻辑与查询引擎间的屏障。为此，该研究在架构底层引入了两项核心机制：一是**基于外键的路径导航语法**，利用点号导航取代显式联接，降低了多表关联查询的构建门槛；二是**度量列锁定机制**，通过绑定计算粒度，解决了复杂关联查询中常见的指标重复计算难题。该设计允许用户在标准SQL中直接调用封装好的业务规则，无需切换至专用API, 并通过TPC-H基准测试验证了查询结构的简化程度。',
    link: 'https://vldb.org/cidrdb/2026/semantic-data-modeling-graph-query-and-sql-together-at-last.html',
    tags: ['SQL 扩展','语义数据模型']
  },
  {
    id: 23,
    sessionId: 'session-5',
    title: 'Database Research needs an Abstract Relational Query Language',
    recommendation: 2,
    authors: 'Wolfgang Gatterbauer, Diandre Miguel B. Sabale',
    affiliation: 'Northeastern University (美国东北大学)',
    abstract: '用大模型生成SQL越来越普遍，但现在的**SQL语言设计**不适合人机对话，更不适合用来交流查询的真实意图。因此，该研究提出了一种“**抽象关系查询语言**”的新概念 ，能将把AI生成的复杂代码提炼出最核心的数据库操作模式。该研究提出三项核心机制：一是构建了旨在明确意图的核心模型，使不同语言间的逻辑结构可比；二是建立了多模态映射机制，通过语言树与层次图分别服务于机器与人类的理解；三是引入了环境约定机制，将集合逻辑与空值处理作为独立参数，保障了核心逻辑的稳健。相关用户研究证实，该架构在识别关系模式的速度与准确度上优于传统SQL 。',
    link: 'https://vldb.org/cidrdb/2026/database-research-needs-an-abstract-relational-query-language.html',
    tags: ['关系语言设计','查询理解']
  },
    {
    id: 24,
    sessionId: 'session-6',
    title: 'Towards Scalable Visual Data Wrangling via Direct Manipulation',
    recommendation: 3,
    authors: 'El Kindi Rezig, Mir Mahathir Mohammad, Nicolas Baret, Ricardo Mayerhofer, Andrew McNutt, Paul Rosen',
    affiliation: 'University of Utah（犹他大学）、Hopara, Inc（霍帕拉公司）',
    abstract: '现有**数据整理工具**要么依赖易出错、难调试的手动脚本，要么依托可控性有限的黑盒自动化流水线，且可视化工具与数据修复流程相互脱节。该研究提出可扩展的**可视化数据整理系统** Buckaroo，将数据整理重构为基于可视化的直接操作任务，试图打通可视化检查与可编程修复的壁垒。该系统以**数据分组**为核心，搭建了可扩展的异常检测与修复框架，通过本地化检测策略减少重复计算，还集成 Hopara 引擎实现大规模数据集的多层交互式导航，同时支持操作回溯与修复脚本自动生成。在十万规模的数据集测试中，系统核心操作响应时间低于1s，具有降低数据整理技术门槛的潜力。开源链接：https://github.com/shapevis/BuckarooVisualWrangler',
    link: 'https://vldb.org/cidrdb/2026/towards-scalable-visual-data-wrangling-via-direct-manipulation.html',
    tags: ['数据整理','可视化分析']
  },
  {
    id: 25,
    sessionId: 'session-6',
    title: 'The Pneuma Project: Reifying Information Needs as Relational Schemas to Automate Discovery, Guide Preparation, and Align Data with Intent',
    recommendation: 4,
    authors: 'Muhammad Imam Luthfi Balaka, Raul Castro Fernandez',
    affiliation: 'The University of Chicago（美国芝加哥大学）',
    abstract: '在数据管理中，由于**用户需求模糊多变**，数据发现与准备始终存在瓶颈，但现在可以通过**大模型帮助用户精准表达自身信息需求**。该研究提出 Pneuma-Seeker 系统，通过与用户的多轮人机交互，将**用户信息需求具象化为关系数据模型**。系统根据上下文特化、指挥器式动态规划、共享状态收敛原则搭建模块化架构，通过人机迭代反馈逐步收敛至潜在需求，同时自动沉淀组织隐性知识。在KramaBench 的考古学、环境数据集上，通过大模型模拟用户完成评测，在两个数据集的准确率分别达 41.67% 和 55.00%，优于基线系统。',
    link: 'https://vldb.org/cidrdb/2026/the-pneuma-project-reifying-information-needs-as-relational-schemas-to-automate-discovery-guide-preparation-and-align.html',
    tags: ['数据发现','数据准备','信息需求','LLM','人机交互']
  },
  {
    id: 26,
    sessionId: 'session-6',
    title: 'A Vision for Autonomous Data Agent Collaboration: From Query-by-Integration to Query-by-Collaboration',
    recommendation: 4,
    authors: 'Timo Eckmann, Carsten Binnig',
    affiliation: 'Technical University of Darmstadt（德国达姆施塔特工业大学）',
    abstract: '传统**多数据源查询**依赖中心化集成与固定全局模式，成本高且难适配数据源的规模、异构性与动态性。对此，研究设计**去中心化查询协作协议**，实现**异构数据源**无全局模式的动态查询。其核心创新有两点：一是搭建含查询协调器、自治数据代理、结果代理的 QCP 系统，各组件各司其职完成分布式协同查询；二是设计生成反馈循环和代码生成式结果对齐机制，分别解决语义错位问题、实现异构数据归一化与多源结果融合。研究实现 QCP-DB 原型，在改造后的 BIRD 基准测试中，该原型 4 代理下的执行精度与中心化系统相近，增加代理或加入数据模式噪声后，性能仅小幅下降。开源链接：https://github.com/DataManagementLab/A-Vision-for-Autonomous-Data-AgentCollaboration',
    link: 'https://vldb.org/cidrdb/2026/a-vision-for-autonomous-data-agent-collaboration-from-query-by-integration-to-query-by-collaboration.html',
    tags: ['数据管理','异构数据源','分布式数据查询']
  },
  {
    "id": 27,
    "sessionId": "session-7",
    "title": "Flexible I/O for Database Management Systems with xNVMe",
    "recommendation": 4,
    "authors": "Emil Houlborg, Andreas Nicolaj Tietgen, Javier González, Simon A. F. Lund, Vivek Shah",
    "affiliation": "IT University of Copenhagen（哥本哈根信息技术大学）, Samsung（三星）",
    "abstract": "现有数据库管理系统在适配多样化 NVMe 设备时，常受限于传统 POSIX 文件系统接口和同步 I/O 方式，导致现代 NVMe 存储的高性能潜力无法被充分发挥。为此，该研究引入 xNVMe 库并为 DuckDB 构建了名为 nvmefs 的文件系统扩展，旨在通过统一的消息传递 API 整合多样的存储 I/O 路径，让 DuckDB 能够高效适配现代 NVMe 硬件与各类 I/O 技术。在架构底层，核心设计包括：1）**多 I/O 路径封装机制**：利用 xNVMe 封装了 io_uring、libaio 及 SPDK 等多种 I/O 路径，解决了数据库在不同操作系统、存储协议下适配多样化 I/O 栈的开发与移植难题；2）**直接块访问模型**：通过 nvmefs 遵循 DuckDB 的文件抽象，底层直接与磁盘块交互并将数据映射至逻辑块地址，而非通过传统文件系统管理数据。评测成效显示，在 DuckDB 数据库的实际测试中，该架构让 DuckDB 成功调用了 IO Passthru、SPDK 与灵活数据放置（FDP）技术，无手动调优的情况下，I/O 密集型查询的执行耗时最高降低 50%，非 I/O 密集型场景的性能与 DuckDB 默认的同步 I/O 表现相当。目前，该 nvmefs 扩展已在 DuckDB 环境中完成集成与性能验证，且可基于 xNVMe 灵活切换各类 I/O 后端。开源链接：https://github.com/OpenMPDK/xNVMe",
    "link": "https://vldb.org/cidrdb/papers/2026/p6-houlborg.pdf",
    "tags": ["NVMe存储优化", "软硬协同", "DuckDB扩展", "I/O性能提升"]
  },
  {
    "id": 28,
    "sessionId": "session-7",
    "title": "Declarative Memory Services",
    "recommendation": 4,
    "authors": "Jeronimo Castrillon, Jana Giceva, Yu Hua, Kimberly Keeton, Akhil Shekar, Kevin Skadron",
    "affiliation": "Technische Universität Dresden（德累斯顿工业大学）, Technische Universität München（慕尼黑工业大学）, Huazhong University of Science and Technology（华中科技大学）, Google（谷歌）, University of Virginia（弗吉尼亚大学）",
    "abstract": "随着高带宽内存、计算型存储及 CXL 等新型硬件的涌现，现代内存系统的异构性与复杂性已超出传统手动编程的优化极限，导致开发者难以在硬件快速迭代中维持系统效能。面对这一挑战，该研究提出了声明式内存服务（DMS）架构，核心理念是实现硬件特性与应用逻辑的深度解耦，旨在通过高层语义描述取代具体的内存管理指令。在架构底层，核心机制包括：1）**声明式编程接口**：允许开发者仅指定数据所需的属性（如压缩、加密或持久性），而无需关注底层物理器件的实现细节 ；2）**运行时自动化管理**：由 DMS 运行时根据硬件实时状态自动执行数据迁移、复制及近存计算任务，从而在异构层级间实现最优资源分配。该研究通过对数据密集型应用（如基因组学分析与分布式数据库）的典型案例分析，展示了 DMS 在降低编程复杂度的同时，能够灵活适配硬件演进并维持高效执行。目前，该研究已确立了实现声明式内存愿景的系统性研究路线。",
    "link": "https://vldb.org/cidrdb/papers/2026/p21-castrillon.pdf",
    "tags": ["新型硬件适配", "声明式内存服务", "CXL", "云原生架构"]
  },
  {
    "id": 29,
    "sessionId": "session-7",
    "title": "Data Movement-Aware GPU Sharing for Data-Intensive Systems",
    "recommendation": 4,
    "authors": "Yi Jiang, Hamish Nicholson, Viktor Sanca, Anastasia Ailamaki",
    "affiliation": "EPFL（洛桑联邦理工学院）, Oracle（甲骨文）",
    "abstract": "现代数据平台常需同时处理分析型查询与 AI 推理，但这两类负载在 GPU 资源占用上存在天然的错位冲突，导致 PCIe 互连带宽与计算核心无法被高效协同利用。为此，该研究提出了感知数据移动的 GPU 共享调度框架 GUST，其核心理念是将 PCIe 互连视为与计算、内存同等地位的可调度资源，旨在消除异构负载共存时的资源竞争瓶颈。在架构底层，该研究通过以下机制优化引擎效能：1）**任务特征实时分类**：通过监控互连强度，将负载自动划分为传输密集型（分析查询）与设备计算密集型（AI 推理）；2）**流式交错调度**：利用一类任务的 IO 空闲期嵌入另一类任务的计算指令，从而实现 PCIe 带宽饱和与 GPU 算力的并行最大化。评测成效显示，在混合分析与推理负载的四组对比实验中，GUST 显著降低了 colocation 带来的性能退化。目前，该研究已在原型系统中完成了落地验证。",
    "link": "https://vldb.org/cidrdb/papers/2026/p13-jiang.pdf",
    "tags": ["GPU加速", "混合负载调度", "数据库与AI融合", "软硬协同"]
  },
  {
    "id": 30,
    "sessionId": "session-7",
    "title": "Cloudspecs: Cloud Hardware Evolution Through the Looking Glass",
    "recommendation": 3,
    "authors": "Till Steinert, Maximilian Kuschewski",
    "affiliation": "Technische Universität München（慕尼黑工业大学）",
    "abstract": "公有云硬件架构在过去十年经历了剧变，但数据库系统的性能优化仍受困于 CPU 与存储性能增长停滞的瓶颈。面对这一挑战，该研究推出了 Cloudspecs 分析框架，通过对 2015 至 2025 年间的云实例进行回溯建模，旨在揭示成本效益的最优路径。在架构底层，该研究揭示了多项关键演进机制：1）**性能成本解耦分析**：发现网络带宽性价比提升了十倍，相比之下 CPU 与内存增益微小，引导系统向计算存储分离架构演进；2）**跨云定价套利模型**：识别出小型服务商在通用虚拟机上拥有高达五倍的价格优势，帮助开发者打破对单一云巨头的依赖。评测成效显示，该研究通过对 AWS 等数百个实例类型的量化比对，揭示了 NVMe 存储自 2016 年起性能便已进入平台期，并基于此开发了交互式选型工具，目前已在云原生系统设计领域投入应用。",
    "link": "https://vldb.org/cidrdb/papers/2026/p17-steinert.pdf",
    "tags": ["云原生演进", "硬件趋势", "成本效益分析", "云数据库架构"]
  },
  {
      id: 31, 
      sessionId: 'session-8', 
      title: 'Rethinking Analytical Processing in the GPU Era', 
      recommendation: 5, 
      authors: 'Bobbi Yogatama, Yifei Yang, Kevin Kristensen, Devesh Sarda, Abigale Kim, Adrian Cockcroft, Yu Teng, Joshua Patterson, Gregory Kimball, Wes McKinney, Weiwei Gong, Xiangyao Yu', 
      affiliation: 'University of Wisconsin-Madison(威斯康星大学麦迪逊分校), NVIDIA(英伟达), Oracle(甲骨文), Posit PBC(波西特公益公司), OrionX(奥瑞恩 X 公司)', 
      abstract: '**GPU 数据分析**曾受限于显存不足、数据移动瓶颈、硬件成本高和开发难度大等问题，当下硬件的显存扩容、高速互连技术发展及成本下降，叠加软件生态的成熟，为突破该瓶颈提供了基础，该研究为此提出 **GPU 原生 SQL 引擎 Sirius**，以实现对现有数据系统的**即插式加速**，打破 GPU 数据分析的落地局限。Sirius 采用 **GPU 原生执行**设计，将 GPU 作为核心执行引擎，全程在 GPU 完成查询计划执行，降低架构设计复杂度；依托 **Substrait 通用查询计划格式**实现即插式加速，无需修改宿主系统即可完成 GPU 加速适配；搭建模块化架构，复用成熟 GPU 库实现核心算子，还支持算子实现方式的**灵活切换**并设计 **CPU 降级机制**。在 TPC-H 和 ClickBench 基准测试中，Sirius 为单节点 DuckDB 带来 8.3 倍和 7.4 倍的成本效率提升，为分布式 Apache Doris 实现最高 12.5 倍的性能加速，在分布式 TPC-H 测试中也展现出优于 Doris 和 ClickHouse 的执行效率。开源链接：https://github.com/sirius-db/sirius', 
      link: 'https://www.cidrdb.org/cidr2026/papers/p12-yogatama.pdf', 
      tags: ['GPU', '即插式加速'] 
    },
  {
      id: 32, 
      sessionId: 'session-8', 
      title: 'Raster is Faster: Rethinking Ray Tracing in Database Indexing', 
      recommendation: 3, 
      authors: 'Harish Doraiswamy, Jayant R. Haritsa', 
      affiliation: 'Microsoft Research(微软研究院), Indian Institute of Science(印度科学学院)', 
      abstract: '现有**基于 GPU 光线追踪（RT）**的**数据库列索引**方案，因需执行计算密集的光线（几何相交检测、BVH 树遍历）存在内存**访问模式不规则**与**负载均衡**问题，在索引构建和查询中存在性能瓶颈。为此，研究提出**纯光栅化的索引方案 RasterScan**，沿用 RT 类方法的数据模型，以光栅化管线替代光线追踪完成索引构建与查询，打破了光线追踪在数据库索引场景的算力冗余局限。该方案核心创新有二：1）索引构建机制，将数据点映射为纹理像素并分阶段完成分箱与数据分配，通过简单算术运算和原子操作替代 BVH 树构建，大幅降低内存与计算开销；2）索引查询机制，将查询谓词转化为纹理空间的几何图形绘制，以算术值比较替代光线相交检测，分两步完成纹理与缓冲区搜索并最大化 GPU 并行性。研究在含 1 亿条 3 列数据的均匀、Zipf 分布及正态分布数据集上，基于 RTX 4090 等多款 GPU 对 RasterScan 与主流 RT 方案 RTScan 开展对比测试，发现前者索引构建速度提升约 50 倍，查询速度提升超一个数量级，且内存占用仅为 RTScan 的约三分之一，在不同算力 GPU 上均展现出适配性，同时可以通过纹理分辨率调优找到性能最优配置。RasterScan 还可扩展支持多类型数值列、非数值列及索引更新，适配 OLAP 场景需求。开源链接：https://github.com/Microsoft/raster-scan', 
      link: 'https://www.cidrdb.org/cidr2026/papers/p18-doraiswamy.pdf', 
      tags: ['GPU', '数据库列索引', '光线追踪', '光栅化索引方案'] 
    },
  {
      id: 33, 
      sessionId: 'session-8', 
      title: 'Does A Fish Need a Bicycle? The Case for On-Chip NPUs in DBMS', 
      recommendation: 3, 
      authors: 'Alexander Baumstark, Kai-Uwe Sattler', 
      affiliation: 'TU Ilmenau, Germany(德国伊尔梅瑙工业大学)', 
      abstract: '现有数据库集成机器学习多依赖 GPU 加速，存在数据传输开销大、成本高、通用设计导致效率不足的问题，而外接 NPU 因软件生态支持有限未被广泛采用。为此，研究探索将**片上 NPU 集成至数据库管理系统**的可行性，核心围绕片上 NPU 的**硬件特性**与数据库**工作负载的适配性**展开，试图打破数据库中低延迟小尺度机器学习任务的加速局限。研究首先分析了 Intel、AMD 等主流片上 NPU 的架构与工作流，其基于处理单元阵列与本地 SRAM 的设计，实现了低延迟的矩阵运算与数据访问；其次梳理出片上 NPU 在数据传输、多模型并发、能效等方面的七大技术机遇，同时明确了其内存有限、计算能力单一等现存挑战。研究选取**学习索引、查询优化、LLM 算子等**典型数据库场景，基于 Intel Ultra 9 295K、AMD Ryzen AI 9 HX 370 等片上 NPU 及外接 NPU、NVIDIA A100 GPU 开展实测，发现片上 NPU 在小模型推理延迟上表现更优，在 IMDB、TPC-H 数据集的学习索引任务中，推理延迟可低至 0.01-0.2ms，且能效显著高于 GPU 与 CPU，但在大模型、大批次处理场景中仍受限于内存与计算能力。研究还指出未来片上 NPU 需提升内存带宽、增大本地存储、增强计算吞吐量，才能更好适配数据库的实际需求。', 
      link: 'https://www.cidrdb.org/cidr2026/papers/p24-baumstark.pdf', 
      tags: ['NPU', '数据库集成', '机器学习'] 
    },
  {
      id: 34, 
      sessionId: 'session-8', 
      title: 'Hash Joins Meet CXL: A Fresh Look', 
      recommendation: 4, 
      authors: 'Wentao Huang, Mian Lu, Kian-Lee Tan', 
      affiliation: 'National University of Singapore(新加坡国立大学), 4Paradigm Inc.(第四范式)', 
      abstract: '**CXL 技术**虽能融合 DRAM 与 CXL 内存形成交错内存层提升带宽，但现有方案未考量将 CXL 内存数据迁移至该层级的**额外开销**，反而可能降低内存密集型工作负载的性能，这成为 CXL 赋能数据库系统的核心瓶颈。面对这一挑战，研究以主存哈希连接为研究对象展开分析，提出**兼顾带宽收益与数据迁移成本**的性能模型，核心设计理念为仅**将部分 CXL 内存数据迁移至 DRAM**，打破全量迁移的性能局限。1）构建**数据迁移流量模型**，揭示直接将数据从 CXL 迁移至 DRAM 的吞吐率高于迁移至交错内存层的特性，为部分迁移策略提供理论支撑；2）设计**端到端性能模型**，线性拟合 DRAM 数据占比对执行吞吐的影响，推导出最优数据迁移比例，平衡迁移开销与带宽提升收益；3）针对**分区哈希连接**和**非分区哈希连接**的不同执行阶段，适配差异化的部分数据迁移策略，让分区阶段和建表、探测阶段分别发挥带宽优势。研究在符合 CXL 1.1 规范的平台上，基于 16M、64M、256M 基数的等值连接基准测试验证，该策略相较次优的 CXL 内直接执行策略，使分区哈希连接运行时减少 22.20%，非分区哈希连接减少 3.59%，且性能提升效果在不同建表-探测基数比下保持稳定。开源链接：https://github.com/fukien/hashjoins-meet-cxl', 
      link: 'https://www.cidrdb.org/cidr2026/papers/p1-huang.pdf', 
      tags: ['CXL', '哈希连接', '数据迁移'] 
    },
];

export const deepDivePapers = [
  {
    "id": "deep-dive-1",
    "title": "Fast Vector Search in PostgreSQL: A Decoupled Approach",
  "prerequisites": [
    "RAG（检索增强生成）：一种结合了信息检索和生成式大模型的架构，将检索到的私有知识提供给大模型（LLM）以生成更准确答案的技术。",
    "集成式 vs. 专用向量数据库：集成式向量数据库（如 pgvector）在传统关系型数据库（如 PostgreSQL）内部构建向量功能，虽能利用SQL和事务，但受限于传统存储架构，性能通常较弱；专用向量数据库（如 Milvus, Pinecone）为向量检索量身定制，性能极高但破坏了数据一致性。",
    "面向页面的存储结构（Page-oriented Structure）：传统数据库如PostgreSQL将数据组织成固定大小的“页”，通过缓存管理器（Buffer Manager）进行访问。虽然这有利于磁盘IO管理，但对于需要频繁指针跳转和内存扫描的向量搜索（如HNSW算法）会产生巨大的寻址开销。",
    "LSM-Tree（日志结构合并树）：一种将写操作转化为顺序追加并定期合并的存储架构，这种设计天然支持高性能写入和异步索引构建，是现代高性能数据库（如RocksDB）及本文PostgreSQL-V实现高性能向量索引的基础。",
    "WAL（预写式日志）与崩溃恢复：数据库保证事务持久性和一致性的核心手段。数据库在修改数据前先记录日志，以便在系统故障时恢复数据。"
  ],
  "qna": [
    {
      "q": "现有的基于PostgreSQL 的集成式向量数据库的弊端是什么？",
      "a": "集成向量数据库（将向量搜索内置于现有关系数据库如 PostgreSQL 中）pgvector等插件强制向量索引遵循PostgreSQL面向页面的存储结构，这导致了严重的**性能开销**（如缓冲区管理的间接寻址），使其搜索速度远慢于专门的向量数据库。"
    },
    {
      "q": "为了使集成式向量数据库达到专用向量数据库级别性能，本研究做了哪些工作？",
      "a": "本研究提出PostgreSQL-V，一个在 PostgreSQL 中实现快速向量搜索的新系统。与之前通过重用 PostgreSQL 的面向页面结构来继承旧有开销的工作（如 pgvector）不同，PostgreSQL-V 采用了一种新颖的架构设计，将向量索引从 PostgreSQL 的核心引擎中解耦。不再把向量索引塞进 PostgreSQL 的数据页里，而是将其移到引擎外部，作为一个独立的存储组件。内部通过 LSM 架构（类似 RocksDB）管理向量，外部向量索引不再受限于PostgreSQL的页面格式和缓冲区管理，可以直接调用高效的原生向量库（如Faiss或hnswlib），利用内存指针直接访问数据，从而消除架构瓶颈。",
      "image": "figures/1-1.png"
    },
    {
      "q": "既然索引跑到了数据库外面，那如何保证数据的一致性？",
      "a": "PostgreSQL-V通过引入“状态页（Status Pages）”机制和将向量操作挂载到系统的预写日志（WAL）中来保证数据的一致性。\n\n* **“状态页（Status Pages）”机制**，在 PostgreSQL 内部记录每个向量的**当前状态**（如是否已删除或更新），检索时会将外部索引返回的结果与内部状态页进行比对过滤，确保用户查到的永远是最新的正确数据；\n* **将向量操作挂载到WAL**：实际的索引操作在解耦组件中进行。即使解耦组件崩溃，也能通过受**WAL保护**的状态页作为“单一真理来源”来修复索引，不会出现“主表删了数据，索引没删”这种情况。在系统重启恢复时，它会扫描日志并重放未同步到外部索引的操作，保证了“解耦但不失稳”。",
      "image": "figures/1-2.png"
    },
    {
      "q": "PostgreSQL-V 支持哪些类型的向量索引？",
      "a": "得益于其解耦设计，PostgreSQL-V 可以直接“套用”外部成熟的库，从而轻松支持几乎所有主流算法，包括基于图的 HNSW、基于聚类的 IVF 以及乘积量化（PQ）等。"
    },
    {
      "q": "在实际测试中，PostgreSQL-V的性能表现如何？",
      "a": "在向量搜索方面，PostgreSQL-V比pgvector快6.5~8.9倍，比PASE快6倍 。同时，PostgreSQL-V的索引构建速度也大幅提升，且占用的存储空间更小 。最重要的是，达到了与专用向量数据库（如Faiss）持平的性能水平。",
      "image": "figures/1-3.png"
    },
    {
      "q": "对于普通的PostgreSQL用户来说，切换到PostgreSQL-V会有很高的门槛吗？",
      "a": "基本没有。PostgreSQL-V在接口设计上实现了与pgvector和PASE完全兼容的API（IndexAmRoutine）。对于用户而言，它就像是一个可以“**无缝替换**”的高性能版本，不需要修改现有的SQL查询逻辑。"
    },
    {
      "q": "对于研发人员来说，实现 PostgreSQL-V 的最大难点在哪里？",
      "a": "难点在于如何在**不修改** PostgreSQL **核心源代码**的前提下，通过 Hook（钩子）和扩展机制**无缝接入**一套外部的 LSM 存储引擎，并处理好复杂的并发控制和内存分配。"
    },
    {
      "q": "该研究对未来向量数据库的发展有什么启发？",
      "a": "将向量索引与数据库核心引擎解耦，是大幅提升集成式向量数据库性能的关键。在实现向量索引解耦后，为保证索引一致性，需将向量索引的元数据与索引内容分离，依托宿主数据库的事务机制管理元数据，并基于元数据为索引内容设计定制化的一致性保障机制。"
    }
  ],
  "extendedResources": [
    {
      "name": "PostgreSQL-V 论文原文 (CIDR 2026)",
      "link": "https://vldb.org/cidrdb/papers/2026/p2-liu.pdf"
    },
    {
      "name": "PostgreSQL-V 论文双语翻译",
      "link": "http://tprd.dameng.com/outline/s/64ad1356-8708-4e1b-888a-d5bdd434d27c"
    },
    {
      "name": "PostgreSQL-V 开源代码仓库",
      "link": "https://github.com/purduedb/PostgreSQL-V"
    },
    {
      "name": "RabitQ 算法技术白皮书",
      "link": "https://arxiv.org/abs/2405.12497"
    },
    {
      "name": "VectorChord 中 RabitQ 实现源码",
      "link": "https://github.com/tensorchord/VectorChord/tree/main/crates/rabitq"
    },
    {
      "name": "VectorChord 官方 GitHub 仓库",
      "link": "https://github.com/tensorchord/VectorChord"
    }
    ]
  },
  {
  "id": "deep-dive-2",
  "title": "I Can’t Believe It’s Not Yannakakis: Pragmatic Bitmap Filters in Microsoft SQL Server",
  "prerequisites": [
    "Yannakakis 算法：一种处理无环查询（Acyclic Queries）的经典理论算法，通过两阶段（自底向上和自顶向下）的半连接（Semijoin）缩减消除不满足连接条件的元组，确保查询在与输入输出大小成线性比例的时间内完成。",
    "位图过滤器（Bitmap Filter）：一种紧凑的数据结构，用于表示一组值的存在性，在本研究中是布隆过滤器和精确位向量过滤器的统称。在数据库中，位图过滤器通过在连接操作前过滤掉不匹配的元组来减少数据传输和处理开销，是SQL Server实现 Yannakakis 精神的核心工具。",
    "Cascades 优化器框架：一种基于规则和代价的查询优化框架，通过将查询转换为等价逻辑计划并评估物理执行代价来选择最佳计划，允许在搜索计划空间时灵活地插入各种物理算子，从而使SQL Server 将位图过滤器的放置视为一种可以权衡代价的优化选择。",
    "拉取式执行模型（Pull-based Execution）：一种执行引擎模式，算子通过逐层“拉取”数据来工作，使位图过滤器可通过共享内存在算子间高效地传递过滤信息。",
    "实例最优性（Instance Optimality）：指一个算法在特定输入实例上的表现与该实例上任何可能算法的最佳表现仅差一个常数因子。作者证明了在拉取式执行模型下，如果优化器能准确估计成本并选择位图过滤计划，那么该执行过程在处理某些类型的查询（如无环查询）时，其复杂度可以达到与 Yannakakis 算法相同的理论最优水平，即运行时间与输入输出大小呈线性关系。"
  ],
 "qna": [
   {
     "q": "为什么作者说“追求最优连接处理重新点燃了人们对 Yannakakis 算法的兴趣”？",
     "a": "数据库领域重新关注Yannakakis 算法，是因为现代研究者试图通过**位图过滤器**（Bitmap Filters）这一务实的工程手段，在高性能数据库实践中低成本地实现该算法所描述的实例最优。传统的二元连接在处理复杂多表关联时常产生巨大的中间结果，而 Yannakakis 算法通过一系列半连接缩减，能保证中间过程不产生无用的数据 ；工业界发现，利用位图过滤器的轻量级特性配合代价优化器，可以在不引入昂贵标准半连接算子的情况下，使执行引擎达到与该经典算法一致的理论缩减效率，从而在处理无环和复杂有环查询时获得极大的性能增益。",
     "image": "figures/2-1.png"
   },
   {
     "q": "既然这么强，为什么数据库不默认全盘采用 Yannakakis？",
     "a": "因为Yannakakis 需要额外的半连接开销。如果你的数据本身选择性很高，或者连接后的结果集依然很大，那么提前做两轮半连接反而是浪费 CPU。SQL Server 的做法是将其纳入 **Cascades 优化器**，由代价模型决定是否开启这种“Yannakakis 模式” 。Cascades 优化器将位图的创建和应用视为逻辑算子的不同物理实现。在处理查询时，Cascades 优化器会计算位图产生的开销（如内存和 CPU） 、后续算子开销和过滤带来的收益（如节省的 IO）并根据估算的代价来决定是否放置、在哪里放置以及下推多深。"
   },
   {
     "q": "SQL Server 的做法比纯粹的 Yannakakis 算法更优吗？",
     "a": "在生产环境下是的。纯算法需要严格的树分解和复杂的两阶段遍历，工程实现极难且泛化性差 。SQL Server 将其转化为一种“**基于代价的插件**”：Cascades优化器会计算位图的过滤收益，如果划算就插入，不划算就不用 。这种务实的策略让它在保持系统通用性的同时，获得了接近理论最优的加速。",
     "image": "figures/2-2.png"
   },
   {
     "q": "为什么说 SQL Server 的做法是“务实”的？",
     "a": "因为SQL Server 的做法没有引入全新的、不兼容的执行引擎，而是利用现有的**拉取式框架、共享存储和 Cascades 优化器**，通过一系列工程上的权衡和优化，达到了媲美顶尖学术算法的效果，同时保持了系统的稳定性和通用性 。工程上的优化如：SQL Server 不仅能在原始表扫描阶段进行过滤，还可以在连接产生的中间临时结果上构建和应用位图，进一步压减后续复杂连接的处理量 。这种灵活性使得它能够应对极其复杂的查询拓扑结构，作者提到这在很多纯理论研究中并未被充分讨论。",
     "image": "figures/2-3.png"
   },
   {
     "q": "SQL Server 中的位图过滤器（Bitmap Filter）是如何工作的？",
     "a": "在执行 Join 操作时，MSSQL 会在 Hash Join 的 **Build 侧**（构建哈希表的一侧）创建一个位图，记录所有出现的键值；然后将这个位图下推到 **Probe 侧**（探测侧）的扫描算子中。这样，Probe 侧在读取数据时，就能立即**跳过**那些位图中不存在的行，极大地减少了后续进入 Join 算子的数据量。"
   },
   {
     "q": "为什么位图过滤比传统的“半连接”算法更受工业界青睐？",
     "a": "因为位图非常**紧凑**，传递开销极小。传统的半连接需要传输实际的数据键值，可能会导致巨大的网络或内存负载；而位图只需传输少量字节，却能达到同样的过滤效果，且能轻松集成到现有的拉取式引擎中，不需要重构执行框架。"
   },
   {
     "q": "为什么说 SQL Server 的位图过滤不仅仅是简单的“过滤”，而是“继承了 Yannakakis 的精神”？",
     "a": "因为 SQL Server 支持**级联过滤（Cascading Filters）** 。这类似于 Yannakakis 算法的缩减过程。当一个 Hash Join 产生的过滤位图被下推到更深层的扫描算子，甚至被传递给另一个 Join 算子时，它在逻辑上完成了一次“远距离半连接” 。这意味着一个表产生的过滤条件可以层层渗透，让整个执行树中的所有相关表都提前减少数据量。",
     "image": "figures/2-4.png"
   },
   {
     "q": "SQL Server 中的位图过滤器在面对复杂的“环形查询”时表现如何？",
     "a": "虽然 Yannakakis 算法理论上针对无环查询，但 SQL Server 的位图过滤机制**可以处理任意连接图**。由于位图可以从多个 Build 侧生成并同时推送到同一个 Probe 侧，它实际上为有环查询提供了一种接近理论上限的加速效果。",
     "image": "figures/2-5.png"
   },
   {
     "q": "SQL Server 的位图过滤目前还有什么局限性吗？",
     "a": "虽然它很强大，但仍**受限于优化器的成本估计**。如果由于基数估计不准导致优化器认为位图开销大于收益，它就不会采用该计划。此外，在极度稀疏或键值范围巨大的情况下，位图的过滤精度和内存消耗之间也存在权衡。"
   },
   {
     "q": "为什么作者说“哈希连接是唯一能充分发挥 SQL Server 位图过滤器性能潜力的执行原语。”？",
     "a": "这是一种“工程上的最优选”。**哈希连接**在构建（Build）阶段拥有**完整的键值集合**，这使得生成用于模拟半连接的位图（Bitmap）成本极低。这种结合能以极小的代价在现有的拉取式（Pull-based）执行引擎中复现 Yannakakis 的缩减效果。相比之下，Merge Join 或 Nested Loop Join 的执行逻辑通常是流式的或逐行随机访问的，生成和应用位图的开销往往会抵消其收益。"
   },
   {
     "q": "对于研发人员来说，复现这种优化的核心难点是什么？",
     "a": "核心难点不在于“位图”本身，而在于**优化器的集成**。你需要让优化器能够感知到位图过滤器的存在，将其建模为一个代价可计量的物理操作，并赋予位图过滤器跨算子移动的能力 。只有优化器学会了如何正确放置位图，才能真正发挥出类似 Yannakakis 算法的威力。"
   }
  ],
  "extendedResources": [
    {
      "name": "论文原文 (CIDR 2026)-I Can’t Believe It’s Not Yannakakis: Pragmatic Bitmap Filters in Microsoft SQL Server",
      "link": "https://vldb.org/cidrdb/papers/2026/p29-zhao.pdf"
    },
    {
      "name": "论文双语翻译 (CIDR 2026)-I Can’t Believe It’s Not Yannakakis: Pragmatic Bitmap Filters in Microsoft SQL Server",
      "link": "http://tprd.dameng.com/outline/s/cceeeb3d-b1b0-4e94-b0de-bc462e677da1"
    },
    {
      "name": "SQL Server 官方 GitHub 仓库",
      "link": "https://github.com/microsoft/sql-server-samples"
    }
  ]
  },
  {
    "id": 'deep-dive-3', // deep-dive-n
    "title": 'Rethinking Analytical Processing in the GPU Era', // 论文标题
    "prerequisites": [ // 前导知识，以【关键词：解读】的形式呈现
      '可组合数据系统 (Composable Data Systems) 与 Substrait：现代开源数据系统正走向解耦，前端解析、优化器与底层执行引擎可以独立开发和组装。Substrait 是一种用于表示物理和逻辑查询计划的标准化跨语言中间表示（IR）。',
      'GPU 互连技术 (Interconnects) 与高速传输：传统架构中，PCIe 带宽曾是 CPU 与 GPU 间数据移动的重大瓶颈，但最新的 PCIe Gen6 和 NVLink-C2C 等技术大幅提升了传输速率，甚至超越了 CPU 与主存间的带宽。',
      '推送式流水线执行 (Push-based Pipeline Execution)：一种现代查询执行模型。与传统的基于拉取（Pull）的火山模型不同，在此模型中，查询执行器主动将数据块“推送”给下游算子，使得算子保持无状态（Stateless），从而极大简化算子实现并提升缓存友好性。',
      'CUDA 分析加速生态 (libcudf, RMM, NCCL)：libcudf 提供了高度优化的关系型代数算子（如 Hash Join、聚合）的 GPU 物理实现 ；RMM 用于高效管理 GPU 内存池分配 ；NCCL 则专门解决多 GPU 节点间的高速数据集合通信。'
    ], 
    "qna": [ // QA 对，如若涉及图片，给出图片的链接（本地），后续将图片一起发送给我
      {
        "q": '过去GPU在SQL数据分析领域的应用为什么没有成为主流？',
        "a": '过去GPU在SQL分析中难以普及主要受限于四个核心挑战。首先是**GPU显存容量有限**，与CPU数TB的内存相比差距较大。其次是**数据移动瓶颈**，传统的PCIe带宽较低，在系统和GPU间传输数据时容易造成拥堵。此外，**高端GPU硬件极其昂贵**且经常供不应求。最后，从零开始针对GPU专门构建完整的SQL执行引擎**需要极高的工程成本和专业知识**。'
      },
      {
        "q": '作者为何认为现在“GPU数据分析时代已经到来”？',
        "a": '作者认为阻碍GPU数据分析的壁垒正在被现代硬件和软件的进步所打破。在硬件方面，**GPU显存容量每一代都在翻倍**（如最新的达到288GB），且PCIe Gen6和NVLink-C2C等**互联技术极大缓解了数据移动开销**，同时**云端老旧代系GPU的使用成本也在持续下降**。在软件生态方面，开源数据系统正在拥抱**可组合架构（如利用Substrait统一查询计划），结合成熟的libcudf等底层库，降低了构建全新GPU系统的工程门槛**。',
        "image": 'figures/3-1.png'
      },
      {
        "q": '本文提出了什么样的系统来发挥GPU的潜力？',
        "a": '本文提出了一款名为**Sirius**的开源原型SQL引擎。Sirius将**GPU作为核心主执行引擎**，能够跨越多种现有的数据系统，为它们提供开箱即用的**即插即用式**（Drop-in）硬件加速服务。',
        "image": 'figures/3-2.png'
      },
      {
        "q": 'Sirius的设计理念中“GPU原生”具体意味着什么？ ',
        "a": '“GPU原生”意味着**Sirius的执行模型、缓冲管理和数据交换机制完全围绕GPU全量驻留来设计**。Sirius希望将整个查询计划从头到尾都在GPU上执行，而传统异构系统往往需要在CPU和GPU之间拆分任务或仅保留后向兼容的加速外挂。在这种原生架构下，**CPU仅被用作缺少某些GPU功能时的容错回退路径**，这种设计不仅降低了系统复杂性，还显著提升了性能上限。'
      },
      {
        "q": 'Sirius是如何实现“即插即用”加速的？',
        "a": 'Sirius通过拥抱**模块化和可组合的系统设计**来实现平滑接入。Sirius能够接收由外部宿主数据库（例如DuckDB或Apache Doris）生成的标准化Substrait查询计划。因此，宿主数据库只需将原本发给CPU引擎的查询路由给Sirius，用户端完全不需要更改交互界面或迁移到新数据库，即可直接享受到底层的GPU加速红利。 '
      },
      {
        "q": '在具体接收到查询计划后，Sirius的底层查询执行引擎是如何调度并处理数据的？',
        "a": 'Sirius的查询执行引擎采用了**流水线执行模型**，将查询计划划分为多个流水线级别的任务并加入全局任务队列。在每个流水线内部，执行引擎采用“基于推送（push-based）”的数据处理模式，由执行器作为协调者主动将数据推送到对应的算子中，这确保了各算子保持无状态特性并简化了系统实现。大多数物理算子直接基于高性能的libcudf库构建。'
      },
      {
        "q": 'Sirius的缓冲管理器如何高效管理GPU显存资源？ ',
        "a": 'Sirius的缓冲管理器将宝贵的显存划分为两个独立区域：用于**存放输入数据的“数据缓存区”**（预先分配以降低动态开销）和用于**存储哈希表等中间结果的“数据处理区”**（通过RMM池分配器管理）。为了避免昂贵的数据拷贝，缓冲管理器利用Apache Arrow格式实现了Sirius内部格式与libcudf之间基于指针传递的**零拷贝转换**。'
      },
      {
        "q": '针对分布式数据仓库（如Apache Doris），Sirius如何实现多节点间的数据协作？ ',
        "a": '在多节点分布式环境中，Sirius引入了专门的**交换服务层**（Exchange Service Layer）来协调节点间的数据流转。交换服务层将广播、数据混洗（shuffle）和合并等多节点通信模式抽象为专用的物理算子，并在底层全面采用了NVIDIA的NCCL通信原语来实现高速的网络互联。',
        "image": 'figures/3-3.jpg'
      },
      {
        "q": '在单机和分布式两种不同场景下，集成了Sirius的原有数据库获得了怎样的性能提升？ ',
        "a": '在单机环境的性能测试中，当Sirius作为DuckDB的即插即用加速器时，在**相同的云端硬件租赁成本下**，Sirius在TPC-H基准上实现了8.3倍的成本效率提升，在ClickBench上实现了7.4倍的提升。在分布式环境中接入Apache Doris时，Sirius在相同查询计划下使得执行速度最高提升了12.5倍。'
      },
      {
        "q": '作者计划在未来向哪些方向突破以支持更复杂的工业级应用？',
        "a": '为了应对超出内存容量的大规模数据集，开发团队计划将系统扩展为支持**核外执行（Out-of-Core）**，允许将数据溢出到固定内存或磁盘，并引入批处理流水线模型。此外，团队还计划支持单节点多GPU架构，丰富复杂数据类型与高级操作符（如向量检索和用户定义函数），并**进一步覆盖如DataFusion等更多兼容Substrait的现代数据系统**。',
       
      }
    ],
    "extendedResources": [ // 扩展资料名称及其链接，若无链接，则无需填写 link 字段
      { "name": 'Sirius 项目主页', "link": 'https://github.com/sirius-db/sirius' },
      { "name": 'CIDR 2026 论文原文：Rethinking Analytical Processing in the GPU Era',"link": 'https://vldb.org/cidrdb/papers/2026/p12-yogatama.pdf' },
      { "name": '论文双语翻译',"link": 'http://tprd.dameng.com/outline/s/1fe477ac-a769-44a8-bcc5-163408b5b9d6' },
      { "name": '相关阅读：Substrait 官方文档',"link": 'https://substrait.io/' }
    ]
  },
  {
    "id": 'deep-dive-4', // deep-dive-n
    "title": 'Supporting Our AI Overlords: Redesigning Data Systems to be Agent-First', // 论文标题
    "prerequisites": [ // 前导知识，以【关键词：解读】的形式呈现
      '大语言模型智能体 (LLM Agents)：大语言模型智能体是能够代表用户执行操作、处理和分析数据的自主程序。区别于仅进行文本生成的传统模型，这些程序可以推理、调用工具、编写代码并相互通信。',
      '智能体推测 (Agentic Speculation)：智能体推测是程序在处理数据时采用的一种高吞吐量的探索和解决方案制定过程。该过程包含粗粒度的数据和元数据发现，以及部分解决方案的验证与试错。',
      '满足阈值即止 (Satisficing)：满足阈值即止是一种决策策略，指寻求足够好而非最优完美的解决方案。在本文中，系统优化器尝试“满足”智能体的探索需求，即产生合理的近似结果以指导其下一步行动，而无需完全执行复杂的查询。',
      '多世界隔离(Multi-world Isolation)： 针对智能体在进行数据更新时喜欢并行测试大量“假设（What-if）”场景的特点，提出的一种新型事务并发控制机制。在此机制下，每个分支在逻辑上完全隔离，但在物理存储上高度重叠。了解这一点对于思考传统MVCC（多版本并发控制）如何向极大规模并行分支和快速回滚演进非常有帮助。 '
    ], 
    "qna": [ // QA 对，如若涉及图片，给出图片的链接（本地），后续将图片一起发送给我
      {
        q: '作者为什么认为数据系统需要向“智能体优先（Agent-First）”的架构演进？',
        a: '大语言模型智能体正在变得愈发廉价且强大，未来代表用户提取、转换和更新数据的自动化工作负载将可能成为数据系统的主流。然而，主要为人类或端到端应用程序的间歇性、目标明确的请求而设计的当前的数据系统，难以应对智能体推测所带来的巨大并发请求量和低效的探索性开销。因此，底层系统需要进行架构层面的重新设计以原生适应这些新兴需求。'
      },
      {
        q: '“智能体推测（Agentic Speculation）”具有哪些有别于人类操作的特征？',
        a: '智能体推测主要展现出四个维度的核心特征 ：**规模大与高吞吐（Scale**）：程序不受人类认知带宽的限制，可以并发或顺序发出极大量的探索请求。**异构性（Heterogeneity）**：请求跨越了从早期粗粒度的元数据探索，到后期的局部和完整解决方案的构建。**冗余性（Redundancy）**：各个执行请求之间经常访问相似的数据或执行重叠的操作。**可引导性（Steerability）**：执行流容易受到系统提供的反馈提示（Grounding hints）的影响，从而改变其探索方向并显著提升执行效率。'
      },
      {
        q: '既然智能体的请求具有强烈的探索性和高吞吐特征，传统的SQL查询接口为何不再适用？ ',
        a: '传统的标准SQL仅能表达具体的查询执行指令，如果系统只能接收SQL，其只能提供僵化的精确返回结果，这使得初期的推测性探索变得非常低效。此外，自动化程序在缺乏数据组织先验知识的初期，可能需要查找包含特定语义的表或行，这类广泛的语义匹配需求无法用标准查询语言（如LIKE操作符）来实现。'
      },
      {
        q: '为了解决接口受限的问题，新的系统架构提出了怎样的交互方式？ ',
        a: '新架构引入了更加灵活的“探测（Probes）”机制来取代传统的查询指令。探测不仅包含代码语句，还允许发起方通过自然语言**简报（Briefs）提供背景信息**，例如当前所处的探索阶段、精确度需求约束、意图目标以及各个子查询间的优先级设定。同时，探测接口原生支持跨越所有底层数据和元数据的语义相似度搜索操作。',
        image: 'figures/4-1.png'
      },
      {
        q: '交互方式升级后，数据系统如何更主动地“引导（Steer）”智能体以减少无效的试错成本？',
        a: '数据系统不再仅仅被动地响应指令，而是通过内置的“**休眠智能体（Sleeper Agents）**”在后台并行且主动地收集辅助上下文。休眠模块可以**提供额外的数据指引**（例如发现并主动分享具备强关联性的表、解释特定查询结果为空的深层原因），或者**提供精准的执行成本估算反馈**，建议发起方修改探测条件或合并批处理请求，从而大幅缩短任务达成路径。'
      },
      {
        q: '在处理海量且冗余的探测请求时，数据系统内部查询优化器的核心目标发生了怎样的根本改变？',
        a: '传统关系型数据库旨在优化整体并发吞吐量并返回百分之百精确的数据结果。而在Agent-First架构中，优化器的新目标是在给定可用计算资源的边界内，**最小化响应探测请求所需的总物理时间**。这意味着底层处理引擎需要动态权衡计算成本与结果准确性，进行“满足阈值即止（Satisficing）”的剪枝优化——仅将探测逻辑执行到足以让发起方明确下一步行动方向的程度即可终止。'
      },
      {
        q: '围绕这一新的优化目标，优化引擎在具体执行层面可以采取哪些剪枝与资源共享策略？',
        a: '在同一批次的探测任务内，处理引擎可以通过语义理解技术匹配用户的真实意图，直接剪枝掉判定为不相关的查询分支或列投影。在跨轮次的连续交互中，如果判断新进入的探测动作无法提供超越历史缓存的新信息增量，系统也会果断丢弃该多余请求。对于确诊的冗余计算部分，架构可利用多查询优化算法、近似查询处理理论和部分结果缓存机制来最大化共享物理计算资源。'
      },
      {
        q: '在物理存储层面，由于智能体经常需要反复查找系统级的背景信息，架构应如何设计以突破读取瓶颈？',
        a: '为了避免外部程序在每次指令下发时都重复打包相同的知识上下文，架构引入并维护了一个持久化且可高效查询的“**智能体内存存储（Agentic Memory Store）**”。该专属组件作为高性能的语义缓存层，不仅长期存储先前探测动作的高价值结果和中间态解决方案，还精细化保存关于数据结构的统计画像和元数据详情（如底层物理编码格式、缺失值分布形态、时间维度粒度等），全面帮助后续进入的智能体瞬间建立对底层运行环境的全局认知。'
      },
      {
        q: '当智能体尝试生成修改数据的复杂解决方案时，往往会进行大量的“假设性（What-if）”并行探索。传统事务隔离机制为何难以支撑，又该如何改进？ ',
        a: '传统的事务一致性保证主要在单一线性的执行线程内运作，从根本上缺乏对系统级状态共享的协作互通模型。自动化程序在处理复杂任务时，通常需要瞬间创建几十倍于人类操作员的逻辑分支，并执行极高频的试错回滚操作。因此，下一代系统需要构建一种中心化的共享事务管控中心，实现多重演化世界的严格逻辑隔离，通过革新级别的多版本并发控制理念，支撑数以千计高度相似数据快照的超大规模并行分叉，并必须提供针对试错失败分支的极速强制中止与物理回滚能力。 '
      }
    ],
    "extendedResources": [ // 扩展资料名称及其链接，若无链接，则无需填写 link 字段
      { "name": '论文原文', "link": 'https://vldb.org/cidrdb/papers/2026/p32-liu.pdf' },
      { "name": '论文双语翻译', "link": 'http://tprd.dameng.com/outline/s/8900fea2-4484-4e36-b912-8857ffae75eb' },
      { "name": '论文解读', "link": 'http://tprd.dameng.com/outline/s/c15dae6e-2ad3-440d-b52c-fb6c78d19549' }
    ]
  },
  {
    "id": 'deep-dive-5', // deep-dive-n
    "title": 'Consistency and Correctness in Data-Oriented Workflow Systems', // 论文标题
    "prerequisites": [ // 前导知识，以【关键词：解读】的形式呈现
      'ACID 特性：数据库事务的四大核心特性，原子性（Atomicity）指事务要么全执行要么全回滚，一致性（Consistency）指事务执行后数据符合规则，隔离性（Isolation）指多事务并发无干扰，持久性（Durability）指事务提交后数据永久保存，是传统数据库事务的基础准则。',
      'Saga 模式：一种分布式事务解决方案，将长事务拆分为多个独立本地事务，每个事务失败时执行对应的补偿操作，以保证数据最终一致性，适用于微服务和工作流场景。',
      'Serverless 无服务器计算：一种云原生计算模型，开发者无需管理服务器，平台按需分配资源，仅按实际运行时长计费，代表技术有 AWS Lambda，是云时代工作流部署的主流架构。',
      '持久化执行（Durable Execution）：工作流系统的核心能力，保证工作流步骤仅执行一次，即使发生故障也能从最后完成的步骤恢复，避免重复执行和数据不一致。',
      '幂等性：指同一操作多次执行的结果与一次执行一致，是外部服务对接工作流的关键要求，避免故障重试时产生重复数据或操作。',
      '幻读问题：数据库并发事务中的隔离性问题，指一个事务两次查询结果集数量不同，因其他事务插入 / 删除数据导致，是工作流回滚时的核心一致性挑战。'
    ], 
    "qna": [ // QA 对，如若涉及图片，给出图片的链接（本地），后续将图片一起发送给我
      {
        "q": '该研究的核心背景和待解决的核心问题是什么？',
        "a": '研究背景是企业纷纷向云迁移并采用 **Serverless 工作流架构**，工作流需处理故障和各类错误，但开发者难以实现可靠的故障恢复逻辑，且仅靠持久化执行无法保证工作流的正确性。核心问题是面向数据的工作流系统**缺乏统一的语义保障**，错误处理和并发回滚易导致数据不一致，且错误处理代码占比极高，大幅增加开发复杂度。'
      },
      {
        "q": '研究提出的 AC/DC 语义保障具体指什么，与传统 ACID 有何关联？',
        "a": 'AC/DC 指工作流需满足**原子性（Atomic）**、**一致性（Consistent）**、**持久性（Durable）**、**正确性（Correct）**，是将传统 ACID 从单个数据库事务扩展到整个工作流的结果。AC/DC 保留了 ACID 的原子性和一致性核心要求，强化了持久性并新增正确性要求，舍弃了 ACID 的隔离性（因长时锁会导致性能问题），适配工作流的分布式和长运行特性。'
      },
      {
        "q": '持久化执行（Durable Computing）对工作流的核心作用是什么，是否能单独解决工作流的正确性问题？',
        "a": '持久化执行的核心作用是保证工作流步骤的**仅一次执行**，故障时**从最后完成的步骤恢复**，将 ACID 的持久性从单事务扩展到整个工作流，还能最小化故障后的重复工作量。其**不能单独解决正确性问题**，因为它仅处理工作流的正向执行故障，无法解决工作流执行失败后的回滚和数据不一致问题，也无法处理并发场景下的错误回滚副作用。'
      },
      {
        "q": '工作流系统处理错误的核心原子性要求是什么，平台需提供哪些错误处理指令？',
        "a": '核心原子性要求是每个工作流实例必须完成（可走替代路径），或看起来从未执行过，即工作流的 **“全有或全无”** 特性。平台需提供四类核心指令：**重试（处理瞬时错误）**、**回滚**、**执行替代操作（如更换仓库）**、**人工解决**，且指令可组合（如重试多次后执行替代操作），最终需保证要么步骤成功要么触发回滚。'
      },
      {
        "q": '工作流回滚主要有哪三种机制，各有什么特点和适用场景？',
        "a": '第一种是**物理回滚**，将整个工作流作为带保存点的单事务，回滚时撤销所有修改，需持有全程锁或保证无并发冲突，适用于短运行、低并发的工作流；第二种是**补偿回滚（Saga 模式）**，为每个步骤设计补偿操作，反向执行恢复数据，无需长时锁，适用于高并发、长运行的工作流，部分补偿可自动生成；第三种是**人工回滚**，适用于复杂度极高、无法自动回滚的场景，是兜底方案。'
      },
      {
        "q": '工作流在并发场景下的 “正确性” 如何定义，平台该如何保证这种正确性？',
        "a": '并发场景下的工作流正确性指**回滚后的结果，与 “恢复错误工作流启动时的所有状态，再执行其他已完成的并发工作流” 的结果一致**。平台需通过**全状态检查点**和**时间回滚能力**实现该正确性，记录工作流启动时的快照，回滚时恢复至该快照，再重放其他并发工作流的完成步骤，避免幻读和级联回滚问题。'
      },
      {
        "q": '实现符合 AC/DC 的工作流系统，需要解决哪些关键的实际问题？',
        "a": '需解决四大实际问题：一是**外部服务对接**，要求外部服务保证幂等性，否则需通过锁或日志校验实现防重，回滚时需自定义补偿；二是**用户停滞步骤**，需将其拆分为独立工作流，避免跨停滞的长时回滚；三是**不可逆步骤**，需将其设为工作流最后一步，且退货等后续操作需单独设计工作流；四是**工作流设计**，需合并高冲突步骤、简化流程，只读工作流无设计限制。'
      },
      {
        "q": '研究在 DBOS 系统中如何实现工作流的持久化执行、物理回滚和补偿回滚？',
        "a": '持久化执行通过 **PostgreSQL 的事务**保障，将**工作流日志与业务操作原子提交**，故障时通过日志找到最后完成步骤恢复，保证仅一次执行；物理回滚基于 **PostgreSQL 的保存点机制**，将整个工作流封装为单事务，步骤失败时回滚到前一个保存点，全程持有数据库锁；补偿回滚为每个步骤配置补偿函数，工作流失败时反向执行补偿函数，补偿步骤同样受持久化执行保障，失败时按策略重试。'
      },
      {
        "q": '该研究的实验设计和核心实验结论分别是什么？',
        "a": '实验基于电商结账工作流，对比 Saga 补偿回滚和物理回滚两种方式，设置了均匀负载、热品高冲突、长运行步骤三个实验场景，衡量吞吐量、P90 延迟、中止率三个指标。核心结论是二者存在性能权衡：**低并发下物理回滚因单次提交效率更高**，性能优于 Saga；**高并发、热品冲突或长运行步骤场景下，Saga 因无长时锁，能保持 0 中止率和稳定延迟，吞吐量和性能表现远优于物理回滚**。',
        "image": 'figures/5-1.jpg'
      },
      {
        "q": '该研究提出的 AC/DC 语义保障对工作流系统的开发有何实际价值，存在哪些局限性？',
        "a": '实际价值是**大幅降低开发复杂度**，将占比 90% 的错误和故障处理逻辑交由平台实现，开发者仅需保证工作流自身的一致性，同时为工作流提供统一的语义保障，解决了分布式场景下的一致性和正确性问题。局限性是长运行工作流若中止，回滚的性能影响较大；已完成的工作流无法回滚，后续操作（如退货）需单独设计工作流；AC/DC 的**正确性保障目前暂未完全实现**，且**无法处理外部服务的回滚问题**。'
      },
      {
        "q": '该研究在未来工作中规划了哪些研究方向，核心探索重点是什么？',
        "a": '未来研究有四个方向：一是将 AC/DC 语义应用于安全隐私领域，如实现 GDPR 要求的 PII 数据可删除；二是形式化定义 Saga 模式的隔离保障，类比 ANSI SQL 的隔离级别；三是探索在不牺牲性能的前提下，提升 Saga 模式的隔离性，如乐观并发控制、混合回滚策略；四是扩展工作流日志的时间旅行调试能力，支持假设分析和自动化 bug 检测。核心探索重点是平衡 Saga 模式的性能和一致性，以及 AC/DC 语义的落地和扩展应用。'
      }
      
    ],
    "extendedResources": [ // 扩展资料名称及其链接，若无链接，则无需填写 link 字段
      { "name": '项目主页', "link": 'https://github.com/DBOS-project/dbos-transact-py' },
      { "name": 'CIDR 2026 论文原文', "link": 'https://mail.vldb.org/cidrdb/papers/2026/p9-stonebraker.pdf'},
      { "name": '论文双语翻译', "link": 'http://tprd.dameng.com/outline/s/bf5f85f9-94fa-434d-97da-e60720f1a1dc'},
    ]
  },
  {
    "id": 'deep-dive-6', // deep-dive-n
    "title": 'Hash Join Meet CXL：A Fresh Look', // 论文标题
    "prerequisites": [ // 前导知识，以【关键词：解读】的形式呈现
      'CXL（Compute Express Link）：一种基于 PCIe 的高速互连技术，主打缓存一致性的内存扩展，分为三类设备，其中 Type-3 专为内存扩展设计，相比 DRAM 成本更低、容量更大，但访问延迟更高、带宽更低，可通过 PCIe 补充 DRAM 的带宽，支持机架级内存池化',
      'DRAM（动态随机存取存储器）：主存的主流介质，具有低延迟、高带宽的特点，但面临容量和带宽的扩展瓶颈，是内存密集型系统的核心存储资源，本文中主存与 DRAM 为同义表述。',
      '内存交织（Interleaved Memory）：将 DRAM 和 CXL 内存按特定比例组合成统一内存层的技术，最优交织比例与 DRAM 和 CXL 的带宽比相关，目的是利用二者的聚合带宽提升性能，该配置通常在操作系统层面固定。',
      '分区哈希连接（PHJ）：主流的主存哈希连接算法，遵循 “先分区后连接” 范式，先将输入表分区为缓存大小的块，再在缓存内执行连接以避免缓存缺失，分区阶段是其执行时间的主要消耗部分。',
      '非分区哈希连接（NPHJ）：另一种主流主存哈希连接算法，分构建和探测两个阶段，利用硬件特性隐藏缓存缺失延迟，通常构建侧数据量更小，探测阶段为执行时间的主要消耗部分，二者均为带宽密集型操作。',
      'OLAP（联机分析处理）：面向数据分析的数据库操作，以复杂查询、海量数据处理为特征，主存哈希连接是其核心基础操作，对内存带宽和访问效率要求极高。'
    ], 
    "qna": [ // QA 对，如若涉及图片，给出图片的链接（本地），后续将图片一起发送给我
      {
        "q": '当前 DRAM 面临的扩展问题是什么，CXL 技术为何能成为解决该问题的关键方案？',
        "a": 'DRAM 面临**每核心带宽和每核心容量的增长停滞**问题，导致内存密集型系统的性能提升受限；CXL 可通过 PCIe **实现内存扩展**，补充 DRAM 的带宽，支持机架级内存池化，且成本更低、功耗更优，还能与 DRAM 并行访问利用**聚合带宽**，成为突破内存扩展瓶颈的重要技术。'
      },
      {
        "q": '现有基于 CXL 的系统优化策略核心是什么，该策略存在的关键问题是什么？',
        "a": '现有策略的核心是将 DRAM 和 CXL 内存按最优比例构建**交织内存层**，将整个工作负载迁移至该层后执行，以利用聚合带宽提升性能；关键问题是该策略忽略了数据从 CXL 迁移到交织层的**额外开销**，对于数百 GB 级的大工作负载，该开销会**抵消带宽提升的收益**，甚至导致性能比直接在 CXL 中执行更差。',
        "image": 'figures/6-1.jpg'
      },
      {
        "q": '本文选择主存哈希连接作为研究对象的原因是什么?',
        "a": '主存哈希连接是 **OLAP 等内存密集型工作负载**的核心基础操作，且 PHJ 和 NPHJ 两种主流算法均为**带宽密集型**，理论上能从 CXL 的聚合带宽中获益；同时该操作的执行阶段清晰，便于拆解分析数据移动开销和带宽收益的平衡关系，适合验证 CXL 系统的优化策略。'
      },
      {
        "q": '数据从 CXL 迁移到交织内存层时，为何无法充分利用系统的聚合带宽？',
        "a": '数据迁移是将 CXL 中的数据复制到交织层，源端为 CXL、目的端为 DRAM+CXL 交织，导致 CXL 的内存流量为 x+2y，DRAM 仅为 x（x、y 为交织层 DRAM 和 CXL 占比），使内存**流量向 CXL 倾斜**，无法匹配系统最优的 DRAM-CXL 流量比，进而无法充分利用 DRAM 带宽，导致数据迁移吞吐量偏低。'
      },
      {
        "q": '本文提出的 CXL 系统哈希连接优化核心策略是什么，相比现有策略有哪些优势？',
        "a": '核心策略是并非将全部数据迁移至交织层，而是根据性能模型**将最优比例的部分数据从 CXL 迁移到 DRAM**，剩余数据留在 CXL，执行时并行访问二者；优势包括**减少数据移动的总开销**、通过调整迁移比例匹配系统最优带宽比以**获得近最大执行带宽**、灵活平衡数据移动成本和带宽收益，提升端到端性能。'
      },
      {
        "q": '本文构建的端到端性能模型核心思路是什么，如何确定最优的数据迁移比例？',
        "a": '模型先抽象带宽密集型操作的 “数据移动 + 查询执行” 通用流程，定义了 CXL 直接执行的成本、部分数据迁移后的移动 + 执行综合成本，通过线性近似拟合 DRAM 占比对执行吞吐量的影响；通过求成本函数的导数，得出使性能增益最大的最优 DRAM 迁移比例 x=（√(mk)-1）/m（m、k 为系统相关系数），若该值超过系统最优交织比例 α 则取 α，若 mk<1 则不迁移数据。'
      },
      {
        "q": '该性能模型如何分别应用到 PHJ 和 NPHJ 两种哈希连接算法中？',
        "a": '对于 PHJ，模型仅应用于占执行时间主导的**分区阶段**，将最优比例的输入表数据迁移到 DRAM，分区输出存入最优比例的交织层，连接阶段因在缓存内执行无需额外数据移动；对于 NPHJ，模型可同时应用于**构建和探测**两个阶段，可直接通过模型公式估算性能增益。'
      },
      {
        "q": '本文的实验平台配置和核心对比策略分别是什么？',
        "a": '实验基于 CXL 1.1 平台，主机含 32GB DDR5 DRAM（峰值 30.01GB/s）、64GB CXL Type-3 内存（20.95GB/s），最优 DRAM:CXL 交织比例为 3:2，聚合带宽 47.50GB/s；核心对比四种策略，分别是直接在 CXL 执行、全量迁移到 DRAM 执行、全量迁移到最优交织层执行、按模型最优比例部分迁移到 DRAM 后并行访问执行。'
      },
      {
        "q": '实验结果验证了本文提出的优化策略有哪些核心优势？',
        "a": '该策略在所有实验的表大小和构建 - 探测比例下均表现最优，相比次优的 CXL 直接执行策略，PHJ 运行时减少 22.20%、NPHJ 减少 3.59%，且性能提升与模型预估高度吻合；同时验证了全量迁移策略的性能劣于直接在 CXL 执行，证明了最小化数据移动开销的重要性。',
        "image": 'figures/6-2.jpg'
      },
      {
        "q": '本文提出的性能模型的准确性和鲁棒性如何得到验证？',
        "a": '准确性上，模型预测的最优数据迁移比例与实验实测值接近，预估的性能增益与实际观测值趋势一致，仅因带宽提升的亚线性特性存在小幅偏差；鲁棒性上，该策略在不同的输入表大小、构建 - 探测比例下均能稳定实现性能提升，适用于多样化的带宽密集型关系型工作负载。',
        "image": 'figures/6-3.jpg'
      },
      {
        "q": '本文提出的优化策略在未来 CXL 系统及其他相似技术中是否具有适用性？',
        "a": '对于未来 CXL 系统，随着 CXL 和 PCIe 带宽提升，模型中 λ=mk 的数值会增大，策略的性能增益会单调提升，仍具备优化价值；对于其他技术，该策略可扩展到 NVLink、NUMA 互连等通过互连提供独立内存带宽的架构，为异构内存层级的带宽密集型应用优化提供参考。'
      },
      {
        "q": '本文的核心研究贡献和未来研究方向分别是什么？',
        "a": '核心贡献一是从端到端视角重新分析了 CXL 系统中的主存哈希连接，指出全量迁移到交织层的策略存在性能缺陷；二是构建了通用的端到端性能模型，提出了部分数据迁移的优化策略，实现了数据移动成本和带宽收益的平衡。未来方向包括将模型扩展到其他带宽密集型查询操作、探索多连接查询的优化、验证策略在其他内存扩展技术上的通用性。'
      }
      
    ],
    "extendedResources": [ // 扩展资料名称及其链接，若无链接，则无需填写 link 字段
      { "name": '项目主页', "link": 'https://github.com/fukien/hashjoins-meet-cxl' },
      { "name": 'CIDR 2026 论文原文', "link": 'https://www.cidrdb.org/cidr2026/papers/p1-huang.pdf'},
      { "name": '论文双语翻译', "link": 'http://tprd.dameng.com/outline/s/76e23935-111b-4af4-9276-5c3fe024d37b'}
    ]
  },
];