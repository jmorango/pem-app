import Category from '../models/category';
import  CatContent from '../models/catContent';
//import SubCategory from '../models/catContent';

//color codes taken from https://www.w3schools.com/cssref/css_colors.asp

export const CATEGORIES = [
   // new Category('c7', 'Search', '#9eecff'),
   // new Category('c8', 'Chatroom & CME', '#00ffb8'),
    new Category('c1', 'Medical', '#ffc6d0'),
    new Category('c2', 'Surgical', '#ff6461'),
    new Category('c3', 'Trauma ', '#ffc857'),
    new Category('c4', 'Toxicology', '#cc8b79'),
    new Category('c5', 'Foreign Ingestion', '#32b5ed'),
    new Category('c6', 'Emergent Rashes', '#8bf7a9'),
    
  ];

  export const CATCONTENT = [
      
    //Medical
    new CatContent('c1-1', 'Status asthmaticus','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-2', 'Status epilepticus','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-3', 'Sepsis','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-4', 'Sickle cell and fever','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-5', 'Pneumonia','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-6', 'Pyelonephritis','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-7', 'Fever in immunosuppressed','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-8', 'Fever < or = 28 days','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-9', 'Fever <  or = 60 days','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-10', 'Orbital cellultis','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-11', 'Pelvic Inflammatory disease','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-12', 'Ectopic pregnancy','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-13', 'Meningitis ','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-14', 'Altered mental status','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-15', 'Retropharyngeal abscess','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-16', 'Peritonsillar abscess','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-17', 'Hypertensive crisis','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-18', 'Thyroid storm','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-19', 'DKA','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-20', 'Anaphylaxis','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-21', 'Bacterial tracheitis','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-22', 'Croup','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c1-23', 'BRUE','#ffc6d0','c1','evaluation', 'signs', 'management', 'medications', 'references', 'image'),

    //Surgical
    new CatContent('c2-1', 'Appendicitis', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-2', 'Testicular Torsion', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-3', 'Ovarian Torsion', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-4', 'Pyloric stenosis', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-5', 'Midgut volvulus', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-6', 'Intracranial bleed', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-7', 'Globe rupture', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-8', 'Hyphema', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-9', 'Nasal septal hematoma', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-10', 'Surgical airway', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-11', 'Necrotizing enterocolitis', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-12', 'Peritonitis', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-13', 'Perianal abscess', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-14', 'Acute cholecystitis', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c2-15', 'Intussusception', '#ff6461','c2','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    
    //Trauma
    new CatContent('c3-1', 'SPINE ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-2', 'HEAD  ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-3', 'MVC ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-4', 'PEDESTRIAN HBC ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-5', 'BLUNT THORACIC ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-6', 'BLUNT ABDOMINAL ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-7', 'GSW EXTREMITY ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-8', 'TENSION PNEUMOTHORAX ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c3-9', 'CARDIAC TAMPONADE ', '#ffc857','c3','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
        
    //Toxicology
    new CatContent('c4-1', 'ACETAMINOPHEN', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-2', 'IRON', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-3', 'SALICYLATE', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-4', 'TRICYCLIC ANTIDEPRESSANTS', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-5', 'CLONIDINE', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-6', 'ORGANOPHOSPHATE', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-7', 'CARBON MONOXIDE', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-8', 'CYANIDE', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-9', 'OPIOIDS', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-10', 'BENZODIAZEPINES', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-11', 'ECSTASY', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-12', 'BATH SALTS', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-13', 'COCAINE', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-14', 'LSD', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-15', 'MARIJUANA', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),
    new CatContent('c4-16', 'ALCOHOLS', '#cc8b79','c4','evaluation', 'signs', 'management', 'medications', 'references', 'image'),

  

    /*
    //
    new Category('c5', 'Foreign Ingestion', '##32b5ed'),
    new Category('c6', 'Emergent Rashes', '#8bf7a9'),
    new Category('c7', 'Search', '#9eecff'),
    new Category('c8', 'Chatroom', '#b9ffb0')
    //some content from Udemy.com
    */
  ];