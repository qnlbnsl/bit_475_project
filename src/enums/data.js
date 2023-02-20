

const data = [
  `Dr. Abboud is a board certified orthopaedic surgeon and specializes in the treatment of patients with shoulder and elbow disorders. He is an internationally recognized authority on the treatment of shoulder and elbow disorders. He is a Professor of Orthopaedic Surgery at the Sidney Kimmel Medical College of Thomas Jefferson University and has recently completed his four year term as the Senior Vice President of Clinical Affairs at Rothman Orthopaedic Institute. During this time he worked with the executive leadership team to oversee a time of tremendous organizational growth of Rothman Orthopaedic Institute.`,
  `Dr. Abboud graduated Summa Cum Laude from St. Joseph’s University in 1994 with a B.S. in Biology. He received his medical degree from Georgetown University School of Medicine where he was promoted with “Distinction.” He earned membership in the Alpha Omega Alpha (AOA) Honor Society and graduated with honors in 1998. He went on to complete his residency in orthopaedic surgery at the Hospital of the University of Pennsylvania where he served as the administrative chief resident. He subsequently completed two (one-year) fellowships at the University of Pennsylvania in Shoulder and Elbow surgery and orthopaedic biomechanics.`,
  `Dr. Abboud maintains a full clinical practice and an active academic and teaching schedule. He has 20 years of experience in shoulder and elbow surgery. He actively participates in regional, national, and international orthopaedic societies and serves on various national committees in leadership positions.`,
  `He has presented over 500 lectures nationally and internationally and is the author of over 200 scientific articles and several textbooks. He has an active interest in basic science research focusing on the modulation of scar formation after injury and surgery, biologic markers for prediction of rotator cuff healing, as well as the role of cholesterol in tendon health. This research has been funded by prestigious grants from the Orthopaedic Research and Education Foundation, the Department of Defense, and the American Orthopaedic Society for Sports Medicine.`,
  `His passion for teaching has been acknowledged by the Sidney Kimmel Medical College at Thomas Jefferson University, Deans Award for Excellence in Education. He has routinely been recognized for excellence in patient care by receiving such awards as the Castle Connolly's American Top Doctors recognition as well as the Top Doc edition of Philadelphia Magazine and other regional publications.`,
  `Dr. Abboud performs a wide variety of simple and complex surgical procedures on the shoulder and elbow including arthroscopic surgery (e.g. rotator cuff repairs, instability surgery) comprehensive fracture care, as well as shoulder and elbow replacement (arthroplasty) procedures. Dr. Abboud is most proud of the fact that he has been caring for patients in the Delaware Valley, Philadelphia, and South Jersey since the late 90's. His goal is to always provide each patient with exceptional personalized care.`,
]

const id= "test"


export const abboudData = {
  id: "Joseph",
  firstName: 'Joseph',
  lastName: 'Abboud',
  middleName: undefined,
  suffix: 'MD',
  title: 'JOSEPH ABBOUD, MD',
  instructor_specialties: "test",
  description: data,
  quote: undefined,
  // progressiveImage: getInstuctorProgressiveImage(specialties[specialty].label, id),
  // shortVideoLink: getShortInstructorVideoLink(specialty, id),
  // longVideoLink: getLongInstructorVideoLink(specialty, id),
  // videoCover: getInstuctorHomePageVideoCover(id),
  category: "specialty",
  profileLink: `/Instructor/${id}`,
  // profileCover: getInstructorProfileCover(id),
  // events: getInstructorEvents(id),
  // shortVideoCard: getInstructorCardPicture(id),
}
