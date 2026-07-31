import React from 'react';

//* Styles
import './PrivacySection.scss';

const PrivacySection = () => {
  return (
    <section>
      <div className="container-privacy">
        <div className="item-privacy">
          <h3>Collecte et utilisation des données</h3>
          <p>
            Google Tag Manager (GTM) et Google Analytics (GA) sont utilisés pour analyser
            l'activité sur le site (clics, pages visitées, type d'appareil, navigateur et pays de connexion).
            Aucune donnée directement identifiante n'est collectée par ce biais. Ces mesures sont réalisées de manière
            agrégée et anonyme dans le seul but d'améliorer l'expérience utilisateur et les performances du site.
          </p>
          <p>
            En cas d'utilisation du formulaire de contact, votre adresse email, le sujet et le contenu de votre message
            sont collectés. Ces données servent exclusivement à traiter votre demande et ne sont jamais transmises
            à des tiers sans votre consentement préalable.
          </p>
          <p>
            L'envoi de message s'appuie sur le service EmailJS. Seules les informations renseignées (email, sujet, message)
            sont directement transmises par courrier électronique. Aucune autre donnée n'est collectée ni stockée par des tiers.
          </p>
        </div>

        <div className="item-privacy">
          <h3>Cookies et technologies de suivi</h3>
          <p>
            Des cookies sont utilisés pour mesurer l'audience et optimiser le fonctionnement du site.
            Ces cookies ne contiennent aucune donnée personnelle nominative et peuvent être désactivés ou bloqués
            à tout moment depuis les paramètres de votre navigateur.
          </p>
        </div>

        <div className="item-privacy">
          <h3>Durée de conservation et vos droits (RGPD)</h3>
          <p>
            Les données transmises via le formulaire de contact sont conservées uniquement le temps nécessaire
            au traitement de votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
            d'effacement et de portabilité de vos données personnelles, que vous pouvez exercer à tout moment en me contactant.
          </p>
        </div>

        <div className="item-privacy">
          <h3>Sécurité des données</h3>
          <p>
            Des mesures de sécurité adaptées sont mises en œuvre pour protéger vos informations personnelles
            contre tout accès non autorisé, altération, divulgation ou destruction.
          </p>
        </div>

        <div className="item-privacy">
          <h3>Modifications de la politique de confidentialité</h3>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout moment pour refléter les évolutions légales
            ou techniques. Il est conseillé de consulter régulièrement cette page.
          </p>
        </div>

        <div className="item-privacy">
          <h3>Contact</h3>
          <p>
            Pour toute question concernant cette politique ou l'exercice de vos droits, vous pouvez utiliser
            le formulaire de contact disponible sur le site.
          </p>
        </div>

        <div className="item-privacy">
          <span>Dernière mise à jour : 31/07/2026</span>
        </div>
      </div>
    </section>
  );
};
export default PrivacySection;
