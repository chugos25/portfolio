from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


OUTPUT_PATH = (
    Path(__file__).resolve().parents[1] / "public" / "files" / "cv-hugo-sanchez-nieto.pdf"
)

NAME = "Hugo Sánchez Nieto"
TITLE = "Junior Business & Marketing Data Analyst"
SUBTITLE = "Strategy · Analytics · Consumer Insights · Digital Growth"

CONTACT = [
    "Email: sancheznietohugo@gmail.com",
    "LinkedIn: linkedin.com/in/hugo-sanchez-nieto",
    "Public CV version. Phone number and address available on request.",
]

PROFILE = (
    "Junior Business & Marketing Data Analyst with a quantitative focus. Training in "
    "Marketing, Digital Marketing, and Quantitative Techniques, with experience in Power BI "
    "dashboards, funnel analysis, RFM segmentation, CRM, and reporting. Interested in "
    "marketing analytics, business analysis, CRM/BI, consumer insights, performance, and "
    "digital strategy roles in demanding environments."
)

EXPERIENCE = [
    (
        "Euroinnova - EDUCA EDTECH Group",
        "Performance Marketing Analyst Intern",
        "Oct 2024 - Apr 2025",
        [
            "Designed and maintained Power BI dashboards to track marketing KPIs and support executive reporting.",
            "Analysed funnel performance, identifying key drop-off points and contributing to a 2% uplift in ROI.",
            "Developed clustering and customer segmentation models based on RFM.",
        ],
    ),
    (
        "El Nido Alojamiento Turistico",
        "Co-founder & Marketing Specialist",
        "Oct 2022 - Present",
        [
            "Created digital assets on WordPress, Airbnb, and Booking.",
            "Implemented organic lead capture systems, generating more than 50 potential customers in the first ten months.",
        ],
    ),
    (
        "ISAM Education",
        "Marketing Intern",
        "Nov 2022 - Feb 2023",
        [
            "Supported the management and analysis of international clients using HubSpot CRM.",
            "Prepared marketing reports and supported client database organisation for international markets.",
        ],
    ),
    (
        "MAPFRE",
        "Junior Commercial Agent",
        "Sep 2023 - Mar 2024",
        [
            "Supported commercial follow-up of clients and opportunities.",
            "Prepared sales and deviation reports for management.",
        ],
    ),
]

EDUCATION = [
    (
        "Universidad de Granada",
        "Master's Degree in Quantitative Techniques in Business Management",
        "Nov 2025 - Present",
        "In progress. Quantitative focus applied to business management.",
    ),
    (
        "ESIC Business & Marketing School",
        "Master's in Digital Marketing",
        "Oct 2024 - Nov 2025",
        (
            "4 GPA. 10/10 in SEM and 9.6/10 in SEO in the project for Coca-Cola Europacific "
            "Partners. 9.6/10 in the final master project: digital marketing plan for a real "
            "olive oil cooperative."
        ),
    ),
    (
        "Universidad de Almeria",
        "Bachelor's Degree in Marketing and Market Research",
        "Sep 2019 - Jul 2024",
        (
            "Bachelor thesis 10/10 with Honors; nominated for Best Thesis in the Economics "
            "Department. Research later expanded into an IGI Global peer-reviewed academic chapter."
        ),
    ),
    (
        "Universita degli Studi di Modena e Reggio Emilia",
        "Erasmus Programme",
        "Feb 2023 - Jul 2023",
        "Subjects in Italian and international group work.",
    ),
]

SKILL_GROUPS = [
    (
        "Analytics & BI",
        "Power BI, Power Query, SQL, advanced Excel, Tableau, GA4",
    ),
    (
        "Statistics & Modelling",
        "R, SPSS, AMOS, SEM, CFA, MANOVA, logistic regression, OLS regression, Bayesian inference, clustering, RFM segmentation",
    ),
    (
        "Marketing & Business",
        "Performance marketing, SEO/SEM, CRM, customer journey, buyer persona, STP, pricing, benchmarking, market research, go-to-market, CLV:CAC, ROI/ROAS, P&L",
    ),
    (
        "Tools & Workflow",
        "HubSpot CRM, Google Ads, Meta Ads, Screaming Frog, Microsoft Office, Jira, Slack, n8n, Make, Python (basic / pandas)",
    ),
]

CERTIFICATIONS = (
    "Microsoft Career Essentials in Data Analysis (2025); Columbia University Learning AI Through "
    "Visualization (2025); Cambridge English Assessment CEFR B2 (2016)"
)

LANGUAGES = "Spanish: Native (C2); English: Advanced (C1); French: Basic (A2); Italian: Basic (A2)"


def section_title(text: str, styles):
    return Paragraph(text, styles["section"])


def bullet_paragraph(text: str, styles):
    return Paragraph(f"• {text}", styles["body"])


def build_pdf():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="name",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=colors.HexColor("#12324a"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="subtitle",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=14,
            textColor=colors.HexColor("#0f766e"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="body",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=13.2,
            textColor=colors.HexColor("#334155"),
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            textColor=colors.HexColor("#12324a"),
            spaceBefore=10,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="item_title",
            parent=styles["body"],
            fontName="Helvetica-Bold",
            fontSize=9.6,
            leading=13,
            textColor=colors.HexColor("#0f172a"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="muted",
            parent=styles["body"],
            fontSize=8.7,
            textColor=colors.HexColor("#475569"),
        )
    )

    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title=f"{NAME} - Public CV",
        author=NAME,
        subject="Public CV version for portfolio website",
    )

    story = [
        Paragraph(NAME, styles["name"]),
        Paragraph(TITLE, styles["subtitle"]),
        Paragraph(SUBTITLE, styles["subtitle"]),
        Spacer(1, 5),
    ]

    contact_table = Table([[Paragraph(line, styles["muted"])] for line in CONTACT], colWidths=[174 * mm])
    contact_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f3f6f8")),
                ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#dbe5f0")),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    story.extend([contact_table, Spacer(1, 9), section_title("Profile", styles), Paragraph(PROFILE, styles["body"])])

    story.extend([section_title("Experience", styles)])
    for company, role, period, bullets in EXPERIENCE:
        story.append(Paragraph(f"{company} | {role}", styles["item_title"]))
        story.append(Paragraph(period, styles["muted"]))
        for bullet in bullets:
            story.append(bullet_paragraph(bullet, styles))
        story.append(Spacer(1, 4))

    story.extend([section_title("Education", styles)])
    for institution, title, period, detail in EDUCATION:
        story.append(Paragraph(f"{institution} | {title}", styles["item_title"]))
        story.append(Paragraph(period, styles["muted"]))
        story.append(Paragraph(detail, styles["body"]))
        story.append(Spacer(1, 4))

    story.extend([section_title("Skills", styles)])
    for title, detail in SKILL_GROUPS:
        story.append(Paragraph(f"{title}: {detail}", styles["body"]))
        story.append(Spacer(1, 2))

    story.extend(
        [
            section_title("Certifications", styles),
            Paragraph(CERTIFICATIONS, styles["body"]),
            section_title("Languages", styles),
            Paragraph(LANGUAGES, styles["body"]),
        ]
    )

    doc.build(story)


if __name__ == "__main__":
    build_pdf()
